/**
 * Customer Quotation Manager (Unified for Accessories & Electrical Modifications)
 * Formats quote drafts, calculates combo discounts, and exports LINE-ready text.
 */

import { ACCESSORIES, BUNDLES, TESLA_MODELS } from './data.js?v=20260924_v100';

export class QuotationManager {
  constructor(storageKey = 'quoteCart') {
    this.storageKey = storageKey;
    this.quoteItems = this.loadState();
    this.customerNote = '';
    this.extraDiscount = 0; // Fixed TWD deduction
    this.updateNavBadge();
  }

  updateNavBadge() {
    if (typeof document !== 'undefined') {
      const badge = document.getElementById('nav-quote-count');
      if (badge) {
        const count = this.quoteItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
        badge.textContent = count;
      }
    }
  }

  loadState() {
    try {
      let saved = localStorage.getItem(this.storageKey);
      // Migrate legacy draft if needed
      if (!saved) {
        const legacy = localStorage.getItem('tesla_quote_draft');
        if (legacy) saved = legacy;
      }

      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map(item => {
            if (!item.quantity) item.quantity = 1;
            if (!item.type) item.type = 'single';
            return item;
          });
        }
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
    }
    return [];
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.quoteItems));
      this.updateNavBadge();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('quoteUpdated', { detail: { quoteItems: this.quoteItems } }));
      }
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  /**
   * Add item or bundle to quote draft
   * type: 'single' | 'bundle' | 'electrical'
   * variantId: string | null
   */
  addItem(id, type = 'single', variantId = null, extraData = {}) {
    const vId = variantId || null;
    const existing = this.quoteItems.find(i => 
      i.id === id && i.type === type && (i.variantId || null) === vId
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      this.quoteItems.push({
        id,
        type,
        variantId: vId,
        quantity: 1,
        cartKey: extraData.cartKey || `${type}-${id}-${vId || 0}`,
        name: extraData.name || null,
        price: extraData.price || null,
        image: extraData.image || null,
        variantTitle: extraData.variantTitle || null,
        store: extraData.store || null
      });
    }
    this.saveState();
  }

  removeItem(id, type, variantId = null) {
    const vId = variantId || null;
    this.quoteItems = this.quoteItems.filter(i => 
      !(i.id === id && i.type === type && (i.variantId || null) === vId)
    );
    this.saveState();
  }

  updateQuantity(id, type, qty, variantId = null) {
    const vId = variantId || null;
    const existing = this.quoteItems.find(i => 
      i.id === id && i.type === type && (i.variantId || null) === vId
    );
    if (existing) {
      existing.quantity = Math.max(1, qty);
      this.saveState();
    }
  }

  clear() {
    this.quoteItems = [];
    this.extraDiscount = 0;
    this.customerNote = '';
    this.saveState();
  }

  getItemDetails() {
    return this.quoteItems.map(q => {
      if (q.type === 'electrical') {
        return {
          ...q,
          data: {
            id: q.id,
            name: q.name || '電系改裝項目',
            image: q.image || 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&auto=format&fit=crop&q=60',
            storeId: 'electrical'
          },
          unitPrice: q.price || 0,
          officialOriginalPrice: q.price || 0,
          isJowua: false,
          variantTitle: q.variantTitle || null,
          subtotal: (q.price || 0) * (q.quantity || 1)
        };
      }

      let dataObj = null;
      if (q.type === 'single') {
        dataObj = ACCESSORIES.find(a => a.id === q.id);
      } else if (q.type === 'bundle') {
        dataObj = BUNDLES.find(b => b.id === q.id);
      }

      if (!dataObj) {
        if (q.name && q.price) {
          dataObj = {
            id: q.id,
            name: q.name,
            image: q.image || 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&auto=format&fit=crop&q=60',
            storeId: 'store'
          };
        } else {
          return null;
        }
      }

      let officialOriginalPrice = q.price !== null && q.price !== undefined ? q.price : dataObj.price;
      let variantTitle = q.variantTitle || null;

      if (q.type === 'single' && q.variantId && dataObj.variants) {
        const foundVar = dataObj.variants.find(v => String(v.id) === String(q.variantId));
        if (foundVar) {
          officialOriginalPrice = foundVar.price;
          variantTitle = foundVar.title;
        }
      }

      const isJowua = dataObj.storeId === 'jowua' || dataObj.brand === 'Jowua' || (dataObj.id && dataObj.id.startsWith('jowua_'));
      const unitPrice = isJowua ? Math.round(officialOriginalPrice * 0.95) : officialOriginalPrice;
      const subtotal = unitPrice * (q.quantity || 1);

      return {
        ...q,
        data: dataObj,
        unitPrice,
        officialOriginalPrice,
        isJowua,
        variantTitle,
        subtotal
      };
    }).filter(Boolean);
  }

  calculateTotals() {
    const details = this.getItemDetails();
    const rawTotal = details.reduce((sum, item) => sum + item.subtotal, 0);
    const finalTotal = Math.max(0, rawTotal - this.extraDiscount);

    return {
      rawTotal,
      extraDiscount: this.extraDiscount,
      finalTotal,
      itemCount: details.reduce((sum, item) => sum + item.quantity, 0)
    };
  }

  /**
   * Generates formatted LINE text quote string for customer communication.
   */
  generateLineFormatText(selectedModelName = '特斯拉車型') {
    const details = this.getItemDetails();
    const totals = this.calculateTotals();
    const nowStr = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });

    let lines = [];
    lines.push(`🚗【好室多膜 一站式服務 專屬報價單】 (${nowStr})`);
    lines.push(`指定車型：${selectedModelName}`);
    lines.push(`----------------------------------------`);

    details.forEach((item, index) => {
      let storeTag = '[JOWUA 代購 95折]';
      if (item.type === 'electrical') {
        storeTag = '[⚡️電系改裝]';
      } else if (item.data.storeId === 'quackev') {
        storeTag = '[呱樂完工價(已含安裝費)]';
      } else if (!item.isJowua) {
        storeTag = '[好室配件]';
      }

      lines.push(`${index + 1}. ${storeTag} ${item.data.name}`);
      
      if (item.variantTitle) {
        lines.push(`   └ 選擇規格：${item.variantTitle}`);
      }

      if (item.isJowua) {
        lines.push(`   └ 好室代購 95 折優惠（JOWUA 官網原價 NT$ ${item.officialOriginalPrice.toLocaleString()}）`);
      } else if (item.data.storeId === 'quackev') {
        lines.push(`   └ 價格說明：已包含所有門市施工安裝費`);
      }

      if (item.type === 'bundle' && item.data.itemsIncluded) {
        lines.push(`   └ 組合內含：${item.data.itemsIncluded.join(' + ')}`);
      }

      lines.push(`   └ 數量：x${item.quantity}  優惠價：NT$ ${item.unitPrice.toLocaleString()}  小計：NT$ ${item.subtotal.toLocaleString()}`);
    });

    lines.push(`----------------------------------------`);
    lines.push(`💰 小計總額：NT$ ${totals.rawTotal.toLocaleString()}`);

    if (totals.extraDiscount > 0) {
      lines.push(`🎁 組合加碼折扣：-NT$ ${totals.extraDiscount.toLocaleString()}`);
    }

    lines.push(`🔥 最終報價：NT$ ${totals.finalTotal.toLocaleString()}`);

    if (this.customerNote.trim()) {
      lines.push(`📝 備註事項：${this.customerNote.trim()}`);
    }

    lines.push(`----------------------------------------`);
    lines.push(`感謝您的詢問！好室多膜提供 JOWUA 保固登入協助與呱樂完工保固，歡迎預約施工時間！`);

    return lines.join('\n');
  }

  renderDrawerContent(containerId, selectedModelId = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const details = this.getItemDetails();
    const totals = this.calculateTotals();
    const selectedModelObj = TESLA_MODELS.find(m => m.id === selectedModelId) || TESLA_MODELS[0];

    container.innerHTML = `
      <div style="padding: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-file-invoice-dollar" style="color: var(--tesla-red);"></i> 好室多膜 一站式客戶報價單
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">鎖定車型：<strong>${selectedModelObj ? selectedModelObj.short : '全車型'}</strong></span>
        </div>

        ${details.length === 0 ? `
          <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
            <i class="fas fa-shopping-bag" style="font-size: 2.5rem; margin-bottom: 0.75rem; color: var(--text-dim);"></i>
            <p>目前報價單內尚無配件、組合包或電系改裝項目。</p>
            <p style="font-size: 0.8rem; margin-top: 4px;">請在商品或改裝卡片點擊「＋加報價單」按鈕。</p>
          </div>
        ` : `
          <div style="margin-bottom: 1.5rem; max-height: 360px; overflow-y: auto;">
            ${details.map(item => {
              let storeBadgeText = 'JOWUA 95折代購';
              let badgeBg = 'rgba(245,158,11,0.2)';
              let badgeColor = '#b45309';

              if (item.type === 'electrical') {
                storeBadgeText = '⚡️電系改裝';
                badgeBg = 'rgba(232,86,55,0.2)';
                badgeColor = 'var(--primary)';
              } else if (item.data.storeId === 'quackev') {
                storeBadgeText = 'QuackEV (含安裝費)';
                badgeBg = 'rgba(16,185,129,0.2)';
                badgeColor = '#047857';
              }

              return `
                <div class="glass-panel" style="padding: 0.85rem 1rem; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
                  <img src="${item.data.image}" alt="${item.data.name}" style="width: 52px; height: 52px; border-radius: 8px; object-fit: cover;">
                  
                  <div style="flex: 1;">
                    <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 2px; color: var(--text-bright);">
                      <span style="font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; background: ${badgeBg}; color: ${badgeColor}; margin-right: 4px; font-weight: 700;">
                        ${storeBadgeText}
                      </span>
                      ${item.data.name}
                    </div>
                    ${item.variantTitle ? `
                      <div style="font-size: 0.78rem; color: var(--primary); font-weight: 600; margin-bottom: 2px;">
                        <i class="fas fa-check-circle" style="font-size: 0.7rem;"></i> 規格：${item.variantTitle}
                      </div>
                    ` : ''}
                    <div style="font-size: 0.8rem; color: var(--text-muted);">
                      ${item.isJowua ? `
                        <span>好室 95 折：<strong style="color: var(--primary);">NT$ ${item.unitPrice.toLocaleString()}</strong></span>
                        <span style="font-size: 0.72rem; margin-left: 4px;">(官網原價 $${item.officialOriginalPrice.toLocaleString()})</span>
                      ` : `
                        <span>單價：NT$ ${item.unitPrice.toLocaleString()} (已含安裝費)</span>
                      `}
                    </div>
                  </div>

                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button class="btn-icon-action btn-qty-minus" data-id="${item.id}" data-type="${item.type}" data-variant-id="${item.variantId || ''}" style="width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-bright); font-weight: 700; cursor: pointer;">-</button>
                    <span style="font-weight: 800; font-size: 0.9rem; min-width: 20px; text-align: center;">${item.quantity}</span>
                    <button class="btn-icon-action btn-qty-plus" data-id="${item.id}" data-type="${item.type}" data-variant-id="${item.variantId || ''}" style="width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-bright); font-weight: 700; cursor: pointer;">+</button>
                  </div>

                  <div style="text-align: right; min-width: 90px;">
                    <div style="font-weight: 800; color: var(--primary); font-size: 0.95rem;">
                      NT$ ${item.subtotal.toLocaleString()}
                    </div>
                    <button class="btn-remove-quote-item" data-id="${item.id}" data-type="${item.type}" data-variant-id="${item.variantId || ''}" style="background: none; border: none; color: #ef4444; font-size: 0.78rem; cursor: pointer; text-decoration: underline;">
                      刪除
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="glass-panel" style="padding: 1.25rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
              <span>品項小計 (${totals.itemCount} 件)</span>
              <strong>NT$ ${totals.rawTotal.toLocaleString()}</strong>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; font-size: 0.9rem;">
              <span>手動額外整單折扣 (TWD)</span>
              <input type="number" id="quote-extra-discount-input" value="${this.extraDiscount}" placeholder="0" style="width: 100px; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-bright); padding: 4px 8px; border-radius: 6px; text-align: right; font-weight: 700;">
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--border-color); font-size: 1.25rem; font-weight: 900;">
              <span>最終報價金額</span>
              <span style="color: var(--primary);">NT$ ${totals.finalTotal.toLocaleString()}</span>
            </div>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 4px;">
              客製備註事項 (顯示於給客人的報價單末端)
            </label>
            <input type="text" id="quote-note-input" value="${this.customerNote}" placeholder="例：下單後 3 天內安排完工施工 / 含全省宅配免運" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-bright); padding: 8px 12px; border-radius: 8px; font-size: 0.85rem;">
          </div>

          <div style="display: flex; gap: 1rem;">
            <button id="btn-copy-line-quote" class="btn-primary" style="flex: 1; justify-content: center; padding: 0.8rem; background: var(--orange-gradient); color: #fff; border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">
              <i class="fab fa-line" style="font-size: 1.2rem; margin-right: 6px;"></i> 複製 LINE 報價格式文字
            </button>
            <button id="btn-clear-quote-all" class="nav-btn" style="padding: 0.8rem 1.2rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; font-weight: 600; cursor: pointer;">
              清空報價
            </button>
          </div>
        `}
      </div>
    `;

    container.querySelectorAll('.btn-qty-minus').forEach(b => {
      b.addEventListener('click', (e) => {
        const { id, type, variantId } = e.currentTarget.dataset;
        const vId = variantId || null;
        const existing = this.quoteItems.find(i => i.id === id && i.type === type && (i.variantId || null) === vId);
        if (existing) this.updateQuantity(id, type, existing.quantity - 1, vId);
        this.renderDrawerContent(containerId, selectedModelId);
      });
    });

    container.querySelectorAll('.btn-qty-plus').forEach(b => {
      b.addEventListener('click', (e) => {
        const { id, type, variantId } = e.currentTarget.dataset;
        const vId = variantId || null;
        const existing = this.quoteItems.find(i => i.id === id && i.type === type && (i.variantId || null) === vId);
        if (existing) this.updateQuantity(id, type, existing.quantity + 1, vId);
        this.renderDrawerContent(containerId, selectedModelId);
      });
    });

    container.querySelectorAll('.btn-remove-quote-item').forEach(b => {
      b.addEventListener('click', (e) => {
        const { id, type, variantId } = e.currentTarget.dataset;
        const vId = variantId || null;
        this.removeItem(id, type, vId);
        this.renderDrawerContent(containerId, selectedModelId);
      });
    });

    const discInput = document.getElementById('quote-extra-discount-input');
    if (discInput) {
      discInput.addEventListener('input', (e) => {
        this.extraDiscount = Math.max(0, parseInt(e.target.value) || 0);
        this.renderDrawerContent(containerId, selectedModelId);
      });
    }

    const noteInput = document.getElementById('quote-note-input');
    if (noteInput) {
      noteInput.addEventListener('input', (e) => {
        this.customerNote = e.target.value;
      });
    }

    const copyBtn = document.getElementById('btn-copy-line-quote');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = this.generateLineFormatText(selectedModelObj ? selectedModelObj.short : '全車型');
        navigator.clipboard.writeText(text).then(() => {
          alert('✅ 客戶 LINE 格式報價文字已成功複製至剪貼簿！');
        });
      });
    }

    const clearBtn = document.getElementById('btn-clear-quote-all');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clear();
        this.renderDrawerContent(containerId, selectedModelId);
      });
    }
  }
}
