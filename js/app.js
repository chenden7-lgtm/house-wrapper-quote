/**
 * Tesla Accessories App Main Application Coordinator
 * Integrates QuackEV & Jowua store catalogs, combo bundles, and LINE quotation exporter.
 */

import { TESLA_MODELS, STORES, CATEGORIES, ACCESSORIES, BUNDLES } from './data.js?v=20260922_v3';
import { FitmentEngine } from './fitment.js?v=20260922_v3';
import { Visualizer } from './visualizer.js?v=20260922_v3';
import { ChecklistManager } from './checklist.js?v=20260922_v3';
import { QuotationManager } from './quotation.js?v=20260922_v3';
import { PriceSyncEngine } from './sync.js?v=20260922_v3';

export function getBestMatchingVariant(item, selectedModelId) {
  if (!item || !item.variants || item.variants.length === 0) return null;
  if (!selectedModelId || selectedModelId === 'all') return item.variants[0];

  const modelRules = {
    m3_2021_2023: {
      pos: ['2021-2023', '2021~2023', '2021', '2022', '2023', '新版中控', '2018-2023', '2017-2023', '2024 以前'],
      neg: ['2024+', '2017-2020', '2018-2020', '舊版中控']
    },
    m3_2017_2020: {
      pos: ['2017-2020', '2018-2020', '2017', '2018', '2019', '2020', '舊版中控', '2018-2023', '2017-2023', '2024 以前'],
      neg: ['2024+', '2021-2023', '新版中控']
    },
    m3_classic: {
      pos: ['2024 以前', '2017-2023', '2021-2023', '2018-2024', '2018-2023', '經典', '舊款', '2023 以前'],
      neg: ['煥新', 'highland', '2024+ (煥新)']
    },
    m3_highland: {
      pos: ['2024+', '煥新', 'highland'],
      neg: ['2017-2023', '2021-2023', '2024 以前', '2018-2024']
    },
    my_classic: {
      pos: ['2020-2024', '2018-2024', '經典', '舊款', '2024 以前'],
      neg: ['juniper', '2025+']
    },
    my_juniper: {
      pos: ['2025+', 'juniper', '煥新'],
      neg: ['2020-2024', '2024 以前']
    },
    ms_refresh: {
      pos: ['Model S', '2021+'],
      neg: ['Model X', 'Model 3', 'Model Y']
    },
    mx_refresh: {
      pos: ['Model X', '2021+'],
      neg: ['Model S', 'Model 3', 'Model Y']
    }
  };

  const rule = modelRules[selectedModelId];
  if (!rule) return item.variants[0];

  // Priority 1: Has positive keyword AND does not have negative keyword
  for (const v of item.variants) {
    const t = (v.title || v.name || '').toLowerCase();
    const hasPos = rule.pos.some(p => t.includes(p.toLowerCase()));
    const hasNeg = rule.neg.some(n => t.includes(n.toLowerCase()));
    if (hasPos && !hasNeg) return v;
  }

  // Priority 2: Does not have negative keyword
  for (const v of item.variants) {
    const t = (v.title || v.name || '').toLowerCase();
    const hasNeg = rule.neg.some(n => t.includes(n.toLowerCase()));
    if (!hasNeg) return v;
  }

  // Priority 3: Has positive keyword
  for (const v of item.variants) {
    const t = (v.title || v.name || '').toLowerCase();
    const hasPos = rule.pos.some(p => t.includes(p.toLowerCase()));
    if (hasPos) return v;
  }

  return item.variants[0];
}

class TeslaApp {
  constructor() {
    this.fitment = new FitmentEngine();
    
    try {
      this.checklist = new ChecklistManager();
    } catch (e) {
      console.warn('ChecklistManager init error:', e);
    }

    try {
      this.quotation = new QuotationManager();
    } catch (e) {
      console.warn('QuotationManager init error:', e);
    }

    try {
      this.syncEngine = new PriceSyncEngine();
      if (this.syncEngine && typeof this.syncEngine.applyCachedPrices === 'function') {
        this.syncEngine.applyCachedPrices(ACCESSORIES);
      }
    } catch (e) {
      console.warn('PriceSyncEngine init error:', e);
    }

    this.currentView = 'catalog';

    this.initElements();
    
    try {
      this.initModules();
    } catch (e) {
      console.warn('initModules error:', e);
    }

    try {
      this.bindEvents();
    } catch (e) {
      console.warn('bindEvents error:', e);
    }

    try {
      this.renderAll();
    } catch (e) {
      console.error('renderAll error:', e);
    }
    
    try {
      this.startLiveSync(false);
    } catch (e) {
      console.warn('startLiveSync error:', e);
    }
  }

  initElements() {
    this.storeBarContainer = document.getElementById('store-bar-container');
    this.modelGridContainer = document.getElementById('model-grid-container');
    this.categoryPillsContainer = document.getElementById('category-pills-container');
    this.productGridContainer = document.getElementById('product-grid-container');
    this.bundlesGridContainer = document.getElementById('bundles-grid-container');
    
    this.searchInput = document.getElementById('search-input');
    this.sortSelect = document.getElementById('sort-select');
    this.compatAlertBanner = document.getElementById('compat-alert-banner');
    this.compatAlertText = document.getElementById('compat-alert-text');
    
    this.navQuoteCount = document.getElementById('nav-quote-count');
    this.btnSyncLivePrices = document.getElementById('btn-sync-live-prices');
    this.syncStatusText = document.getElementById('sync-status-text');
    this.syncIcon = document.getElementById('sync-icon');
    
    this.detailModal = document.getElementById('detail-modal-overlay');
    this.modalDetailBody = document.getElementById('modal-detail-body');
    
    this.quoteModal = document.getElementById('quote-modal-overlay');
    this.modalQuoteBody = document.getElementById('modal-quote-body');

    this.themeToggleBtn = document.getElementById('btn-theme-toggle');
  }

  initModules() {
    this.visualizer = new Visualizer('visualizer-container', (partId) => {
      this.openDetailModal(partId);
    });
  }

  bindEvents() {
    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.fitment.setSearchQuery(e.target.value);
        this.renderProductGrid();
        this.renderBundlesGrid();
      });
    }

    // Sort select
    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', (e) => {
        this.fitment.setSortBy(e.target.value);
        this.renderProductGrid();
        this.renderBundlesGrid();
      });
    }

    // Main View Tab Switching
    document.querySelectorAll('.view-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.currentTarget.dataset.view;
        this.switchView(view);
      });
    });

    // Top Nav Quote Drawer Button
    const quoteBtn = document.getElementById('btn-open-quote-drawer');
    if (quoteBtn) {
      quoteBtn.addEventListener('click', () => {
        this.openQuoteModal();
      });
    }

    // Close Modals
    const closeDetailBtn = document.getElementById('btn-close-modal');
    if (closeDetailBtn) {
      closeDetailBtn.addEventListener('click', () => {
        this.detailModal.classList.remove('active');
      });
    }

    const closeQuoteBtn = document.getElementById('btn-close-quote-modal');
    if (closeQuoteBtn) {
      closeQuoteBtn.addEventListener('click', () => {
        this.quoteModal.classList.remove('active');
      });
    }

    // Live Price Sync Button
    if (this.btnSyncLivePrices) {
      this.btnSyncLivePrices.addEventListener('click', () => {
        this.startLiveSync(true);
      });
    }

    // Theme Toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        this.themeToggleBtn.innerHTML = next === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      });
    }
  }

  async startLiveSync(isManual = false) {
    if (this.syncIcon) this.syncIcon.classList.add('fa-spin');
    if (this.syncStatusText) this.syncStatusText.innerText = '⏳ 官網活動價：同步中...';

    const res = await this.syncEngine.syncLivePrices(ACCESSORIES);

    if (this.syncIcon) this.syncIcon.classList.remove('fa-spin');

    if (res && res.success) {
      const timeStr = this.syncEngine.getFormattedLastSyncTime();
      if (this.syncStatusText) {
        this.syncStatusText.innerText = `🟢 官網活動價：已同步 (${timeStr})`;
      }
      this.renderProductGrid();
      this.renderBundlesGrid();

      if (isManual) {
        alert(`⚡ 官網最新活動價格已成功連線同步！已核對 ${res.checkedCount} 項官網商品，數據保持 100% 最新！`);
      }
    } else {
      if (this.syncStatusText) {
        this.syncStatusText.innerText = `⚠️ 官網價格：離線快取中`;
      }
      if (isManual) {
        alert('⚠️ 官網同步連線逾時，系統已自動使用最新離線快取價格！');
      }
    }
  }

  switchView(viewName) {
    this.currentView = viewName;
    document.querySelectorAll('.view-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    const vCat = document.getElementById('view-catalog');
    if (vCat) vCat.style.display = viewName === 'catalog' ? 'block' : 'none';
    const vBun = document.getElementById('view-bundles');
    if (vBun) vBun.style.display = viewName === 'bundles' ? 'block' : 'none';
    const vVis = document.getElementById('view-visualizer');
    if (vVis) vVis.style.display = viewName === 'visualizer' ? 'block' : 'none';
    const vChk = document.getElementById('view-checklist');
    if (vChk) vChk.style.display = viewName === 'checklist' ? 'block' : 'none';

    if (viewName === 'visualizer') {
      this.visualizer.render();
    } else if (viewName === 'checklist') {
      this.checklist.render('checklist-container');
    }
  }

  renderAll() {
    this.renderStoreBar();
    this.renderModelGrid();
    this.renderCategoryPills();
    this.renderProductGrid();
    this.renderBundlesGrid();
    this.updateNavQuoteBadge();
  }

  renderStoreBar() {
    if (!this.storeBarContainer) return;
    this.storeBarContainer.innerHTML = STORES.map(store => `
      <button class="store-pill ${this.fitment.selectedStoreId === store.id ? 'active' : ''}" data-store-id="${store.id}">
        <i class="fas ${store.id === 'all' ? 'fa-store' : (store.id === 'quackev' ? 'fa-duck' : 'fa-gem')}"></i>
        ${store.name}
      </button>
    `).join('');

    this.storeBarContainer.querySelectorAll('.store-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.storeId;
        this.fitment.setStore(id);
        this.renderStoreBar();
        this.renderProductGrid();
        this.renderBundlesGrid();
      });
    });
  }

  renderModelGrid() {
    if (!this.modelGridContainer) return;
    this.modelGridContainer.innerHTML = TESLA_MODELS.map(model => `
      <div class="model-card ${this.fitment.selectedModelId === model.id ? 'active' : ''}" data-model-id="${model.id}">
        ${model.badge ? `<span class="badge-tag">${model.badge}</span>` : ''}
        <div class="model-name">${model.short}</div>
      </div>
    `).join('');

    this.modelGridContainer.querySelectorAll('.model-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.modelId;
        this.fitment.setModel(id);
        this.renderModelGrid();
        this.updateCompatAlert();
        this.renderProductGrid();
        this.renderBundlesGrid();
      });
    });
  }

  updateCompatAlert() {
    if (!this.compatAlertBanner || !this.compatAlertText) return;
    const modelObj = this.fitment.getSelectedModelObj();
    if (modelObj.id === 'all') {
      this.compatAlertBanner.style.display = 'none';
    } else {
      this.compatAlertBanner.style.display = 'flex';
      this.compatAlertText.innerHTML = `已鎖定 <strong>${modelObj.name}</strong>！所有單品與禮包價格已自動核對車型相容性。`;
    }
  }

  renderCategoryPills() {
    if (!this.categoryPillsContainer) return;
    this.categoryPillsContainer.innerHTML = CATEGORIES.map(cat => `
      <button class="cat-pill ${this.fitment.selectedCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
        <i class="fas ${cat.icon}"></i> ${cat.name}
      </button>
    `).join('');

    this.categoryPillsContainer.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.catId;
        this.fitment.setCategory(id);
        this.renderCategoryPills();
        this.renderProductGrid();
      });
    });
  }

  getItemUrl(item) {
    if (item.officialUrl) return item.officialUrl;
    if (item.canonicalUrl) return item.canonicalUrl;
    if (item.link) return item.link;

    if (item.handle) {
      if (item.brand === 'Jowua' || item.storeId === 'jowua' || (item.id && item.id.includes('jowua'))) {
        return `https://global.jowua-life.com/products/${item.handle}`;
      } else {
        return `https://www.quackev.com/products/info.php?id=${item.handle}`;
      }
    }

    if (item.id && item.id.startsWith('quack_')) {
      const pid = item.id.replace('quack_', '');
      return `https://www.quackev.com/products/info.php?id=${pid}`;
    }

    if (item.id && item.id.startsWith('jowua_')) {
      const handle = item.id.replace('jowua_', '').replace(/_/g, '-');
      return `https://global.jowua-life.com/products/${handle}`;
    }

    if (item.storeId === 'quackev' || item.brand === 'QuackEV' || item.brand === '呱樂電驢工坊') {
      return `https://www.quackev.com/products/info.php?id=94851`;
    } else {
      return `https://global.jowua-life.com/collections/model3-2024`;
    }
  }

  renderProductGrid() {
    if (!this.productGridContainer) return;
    const products = this.fitment.getFilteredSingleItems();

    if (products.length === 0) {
      this.productGridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; color: var(--tesla-red);"></i>
          <h3>找不到符合條件的單品配件</h3>
          <p>請嘗試切換店家品牌或清空搜尋關鍵字</p>
        </div>
      `;
      return;
    }

    this.productGridContainer.innerHTML = products.map(item => {
      const compat = this.fitment.checkCompatibility(item);
      const itemUrl = this.getItemUrl(item);
      const bestVariant = getBestMatchingVariant(item, this.fitment.selectedModelId);
      const activePrice = bestVariant ? bestVariant.price : item.price;

      return `
        <div class="product-card ${compat.status === 'incompatible' ? 'incompatible' : ''}">
          <div class="product-card-img-wrapper">
            <a href="${itemUrl}" target="_blank" rel="noopener noreferrer" class="product-img-link" title="點擊開啟 ${item.brand} 官方商品頁面">
              <img src="${item.image}" alt="${item.name}" class="product-card-img" loading="lazy">
              <span class="img-external-badge"><i class="fas fa-external-link-alt"></i> 官方頁面</span>
            </a>
            <span class="store-brand-badge ${item.storeId}">
              ${item.storeId === 'quackev' ? 'QuackEV完工' : 'Jowua原廠'}
            </span>
          </div>

          <div class="product-card-body">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 0.8rem; color: var(--text-muted);">${item.brand}</span>
              ${item.isOnSale ? `
                <span style="background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; font-size: 0.7rem; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-flex; align-items: center; gap: 3px; box-shadow: 0 2px 6px rgba(239,68,68,0.3);">
                  <i class="fas fa-fire"></i> 官網促銷價
                </span>
              ` : ''}
            </div>

            <div class="product-title">${item.name}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${item.description}
            </div>

            ${item.variants && item.variants.length > 1 ? `
              <div style="margin-bottom: 0.85rem; background: var(--bg-secondary); padding: 8px 10px; border-radius: 8px; border: 1px solid var(--border-color);">
                <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 4px; font-weight: 700;">
                  <i class="fas fa-list-ul" style="color: var(--tesla-red);"></i> 選擇規格款式 / 顏色組合：
                </label>
                <select class="product-variant-select" id="variant-select-${item.id}" data-id="${item.id}" style="width: 100%; padding: 6px 8px; border-radius: 6px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color); font-size: 0.82rem; font-weight: 600; cursor: pointer;">
                  ${item.variants.map(v => `
                    <option value="${v.id}" data-price="${v.price}" ${bestVariant && String(v.id) === String(bestVariant.id) ? 'selected' : ''}>${v.title}${v.price !== item.price ? ` (NT$ ${v.price.toLocaleString()})` : ''}</option>
                  `).join('')}
                </select>
              </div>
            ` : ''}

            <div class="product-card-footer">
              <div>
                <div class="product-price" id="card-price-${item.id}">
                  NT$ ${activePrice.toLocaleString()}
                  ${item.originalPrice ? `<del>NT$ ${item.originalPrice.toLocaleString()}</del>` : ''}
                </div>
                ${item.storeId === 'quackev' && item.installFee !== undefined ? `
                  <div style="font-size: 0.75rem; color: ${item.installFee > 0 ? 'var(--accent-green)' : 'var(--text-muted)'}; margin-top: 3px; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                    <i class="fas ${item.installFee > 0 ? 'fa-wrench' : 'fa-check-circle'}"></i>
                    ${item.installFee > 0 ? `含門市工資 NT$ ${item.installFee.toLocaleString()} (零件 $${item.partsPrice.toLocaleString()})` : `門市免安裝費`}
                  </div>
                ` : ''}
              </div>

              <div style="display: flex; gap: 0.5rem;">
                <button class="btn-add-quote" data-id="${item.id}" data-type="single">
                  <i class="fas fa-plus"></i> 加報價
                </button>
                <button class="btn-icon-action btn-open-detail" data-id="${item.id}">
                  <i class="fas fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach variant select change event listeners
    this.productGridContainer.querySelectorAll('.product-variant-select').forEach(selectEl => {
      selectEl.addEventListener('change', (e) => {
        const itemId = e.currentTarget.dataset.id;
        const selectedOpt = e.currentTarget.options[e.currentTarget.selectedIndex];
        const newPrice = parseInt(selectedOpt.dataset.price);
        const priceEl = document.getElementById(`card-price-${itemId}`);
        if (priceEl && !isNaN(newPrice)) {
          priceEl.innerHTML = `NT$ ${newPrice.toLocaleString()}`;
        }
      });
    });

    this.productGridContainer.querySelectorAll('.btn-add-quote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const vSelect = document.getElementById(`variant-select-${id}`);
        const selectedVariantId = vSelect ? vSelect.value : null;
        this.quotation.addItem(id, 'single', selectedVariantId);
        this.updateNavQuoteBadge();
        
        const item = ACCESSORIES.find(a => a.id === id);
        let variantText = '';
        if (vSelect && item && item.variants) {
          const v = item.variants.find(x => String(x.id) === String(selectedVariantId));
          if (v) variantText = ` (${v.title})`;
        }
        alert(`✅ 已新增至客戶報價單草稿！${variantText}`);
      });
    });

    this.productGridContainer.querySelectorAll('.btn-open-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        this.openDetailModal(id);
      });
    });
  }

  renderBundlesGrid() {
    if (!this.bundlesGridContainer) return;
    const bundles = this.fitment.getFilteredBundles();

    if (bundles.length === 0) {
      this.bundlesGridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fas fa-cubes" style="font-size: 3rem; margin-bottom: 1rem; color: var(--tesla-red);"></i>
          <h3>目前無對應的特惠套餐組合</h3>
        </div>
      `;
      return;
    }

    this.bundlesGridContainer.innerHTML = bundles.map(bundle => {
      const bundleUrl = this.getItemUrl(bundle);
      return `
        <div class="product-card bundle-card">
          <div class="product-card-img-wrapper" style="height: 180px;">
            <a href="${bundleUrl}" target="_blank" rel="noopener noreferrer" class="product-img-link" title="點擊開啟 ${bundle.storeId === 'quackev' ? 'QuackEV' : 'Jowua'} 官方禮包網頁">
              <img src="${bundle.image}" alt="${bundle.name}" class="product-card-img">
              <span class="img-external-badge"><i class="fas fa-external-link-alt"></i> 官方頁面</span>
            </a>
            <span class="store-brand-badge ${bundle.storeId}">
              ${bundle.storeId === 'quackev' ? 'QuackEV完工套餐' : 'Jowua原廠禮包'}
            </span>
          </div>

          <div class="product-card-body">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="background: rgba(232,33,39,0.2); color: var(--tesla-red); font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                ${bundle.badge || '特惠組合'}
              </span>
              <span class="bundle-save-pill">立省 NT$ ${bundle.saveAmount.toLocaleString()}</span>
            </div>

            <div class="product-title" style="font-size: 1.15rem;">${bundle.name}</div>
            
            <ul class="bundle-items-list">
              ${bundle.itemsIncluded.map(item => `<li><i class="fas fa-check" style="color: var(--accent-green); margin-right: 4px;"></i> ${item}</li>`).join('')}
            </ul>

            <div class="product-card-footer">
              <div class="product-price">
                NT$ ${bundle.price.toLocaleString()}
                <del>NT$ ${bundle.originalPrice.toLocaleString()}</del>
              </div>

              <button class="btn-add-quote" data-id="${bundle.id}" data-type="bundle">
                <i class="fas fa-cart-plus"></i> 整包加入報價單
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.bundlesGridContainer.querySelectorAll('.btn-add-quote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        this.quotation.addItem(id, 'bundle');
        this.updateNavQuoteBadge();
        alert('✅ 已將整套【組合包】新增至客戶報價單！');
      });
    });
  }

  updateNavQuoteBadge() {
    if (!this.navQuoteCount) return;
    const totals = this.quotation.calculateTotals();
    this.navQuoteCount.innerText = totals.itemCount;
  }

  openDetailModal(partId) {
    const item = ACCESSORIES.find(a => a.id === partId);
    if (!item) return;

    const compat = this.fitment.checkCompatibility(item);
    const itemUrl = this.getItemUrl(item);
    const bestVariant = getBestMatchingVariant(item, this.fitment.selectedModelId);
    const activePrice = bestVariant ? bestVariant.price : item.price;

    this.modalDetailBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
        <div>
          <a href="${itemUrl}" target="_blank" rel="noopener noreferrer" style="display: block; position: relative; border-radius: 12px; overflow: hidden; margin-bottom: 1rem;" title="點擊開啟 ${item.brand} 官方商品頁面">
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 12px; object-fit: cover; height: 300px; display: block;">
            <div style="position: absolute; bottom: 12px; right: 12px; background: rgba(11,14,20,0.85); color: #fff; font-size: 0.8rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; gap: 6px;">
              <i class="fas fa-external-link-alt"></i> 開啟 ${item.brand} 官方頁面
            </div>
          </a>
          
          <div class="glass-panel" style="padding: 1rem;">
            <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--tesla-red);">
              <i class="fas fa-tools"></i> 施工與安裝備註
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">
              <div><strong>服務門市/品牌：</strong> ${item.brand}</div>
              <div><strong>安裝耗時：</strong> ${item.installTime}</div>
              <div><strong>安裝方式：</strong> ${item.installType}</div>
            </div>
          </div>
        </div>

        <div>
          <div style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.25rem;">${item.brand}</div>
          <h2 style="font-size: 1.4rem; font-weight: 800; line-height: 1.3; margin-bottom: 0.75rem;">${item.name}</h2>

          <div style="font-size: 2rem; font-weight: 900; color: var(--tesla-red); margin-bottom: 0.5rem;" id="modal-display-price">
            NT$ ${activePrice.toLocaleString()}
          </div>

          ${item.variants && item.variants.length > 1 ? `
            <div style="margin-bottom: 1rem; background: var(--bg-secondary); padding: 10px 12px; border-radius: 8px; border: 1px solid var(--border-color);">
              <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 6px; font-weight: 700;">
                <i class="fas fa-list-ul" style="color: var(--tesla-red);"></i> 選擇規格款式 / 顏色組合：
              </label>
              <select id="modal-variant-select" style="width: 100%; padding: 8px 12px; border-radius: 6px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color); font-size: 0.9rem; font-weight: 700; cursor: pointer;">
                ${item.variants.map(v => `
                  <option value="${v.id}" data-price="${v.price}" ${bestVariant && String(v.id) === String(bestVariant.id) ? 'selected' : ''}>${v.title}${v.price !== item.price ? ` (NT$ ${v.price.toLocaleString()})` : ''}</option>
                `).join('')}
              </select>
            </div>
          ` : ''}

          ${item.storeId === 'quackev' && item.installFee !== undefined ? `
            <div class="glass-panel" style="padding: 0.75rem 1rem; margin-bottom: 1rem; border-left: 4px solid var(--accent-green); background: rgba(16,185,129,0.08);">
              <div style="font-size: 0.85rem; font-weight: 800; color: var(--accent-green); margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.4rem;">
                <i class="fas fa-wrench"></i> QuackEV 呱樂門市完工價格拆解
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 2px; color: var(--text-main);">
                <span>配件零件淨價 (Parts Only)：</span>
                <strong>NT$ ${item.partsPrice.toLocaleString()}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--accent-green);">
                <span>呱樂門市專業施工工資 (Labor Fee)：</span>
                <strong>${item.installFee > 0 ? `NT$ ${item.installFee.toLocaleString()}` : 'NT$ 0 (免工費)'}</strong>
              </div>
            </div>
          ` : ''}

          <div class="glass-panel" style="padding: 0.85rem; margin-bottom: 1.25rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: ${compat.status === 'fit' ? 'var(--accent-green)' : 'var(--accent-amber)'}">
              <i class="fas ${compat.status === 'fit' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
              ${this.fitment.getSelectedModelObj().short} 相容評估：${compat.note}
            </div>
          </div>

          <p style="color: var(--text-main); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">
            ${item.description}
          </p>

          <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse; margin-bottom: 1.5rem;">
            ${item.specs.map(s => `
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 6px 0; color: var(--text-muted); font-weight: 600;">${s.key}</td>
                <td style="padding: 6px 0; color: var(--text-main);">${s.value}</td>
              </tr>
            `).join('')}
          </table>

          <div style="display: flex; gap: 0.75rem;">
            <button id="modal-add-quote-btn" class="btn-primary" style="flex: 1; justify-content: center; padding: 0.75rem;">
              <i class="fas fa-plus"></i> 加入客戶 LINE 報價單
            </button>
            <a href="${itemUrl}" target="_blank" rel="noopener noreferrer" class="nav-btn" style="padding: 0.75rem 1.25rem; font-weight: 700; background: var(--bg-card); color: var(--text-main); border-color: var(--border-color); text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; white-space: nowrap;">
              <i class="fas fa-external-link-alt"></i> 官方頁面
            </a>
          </div>
        </div>
      </div>
    `;

    const modalVSelect = document.getElementById('modal-variant-select');
    if (modalVSelect) {
      modalVSelect.addEventListener('change', (e) => {
        const selectedOpt = e.currentTarget.options[e.currentTarget.selectedIndex];
        const newPrice = parseInt(selectedOpt.dataset.price);
        const priceEl = document.getElementById('modal-display-price');
        if (priceEl && !isNaN(newPrice)) {
          priceEl.innerText = `NT$ ${newPrice.toLocaleString()}`;
        }
      });
    }

    const addBtn = document.getElementById('modal-add-quote-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const vId = modalVSelect ? modalVSelect.value : null;
        this.quotation.addItem(item.id, 'single', vId);
        this.updateNavQuoteBadge();

        let vTitle = '';
        if (vId && item.variants) {
          const v = item.variants.find(x => String(x.id) === String(vId));
          if (v) vTitle = ` (${v.title})`;
        }

        alert(`已成功將「${item.name}」${vTitle} 加入報價單！`);
      });
    }

    this.detailModal.classList.add('active');
  }

  openQuoteModal() {
    this.quotation.renderDrawerContent('modal-quote-body', this.fitment.selectedModelId);
    this.quoteModal.classList.add('active');
  }
}

// Initialize on DOM load or immediately if DOM is ready
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const initApp = () => {
    if (!window.app) {
      window.app = new TeslaApp();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
