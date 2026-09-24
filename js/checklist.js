/**
 * New Owner Essential Checklist & Budget Manager
 * Allows buyers to check off starter accessories, track budget, and export shopping list.
 */

import { ACCESSORIES, INITIAL_CHECKLIST } from './data.js?v=20260922_v3';

export class ChecklistManager {
  constructor(storageKey = 'tesla_owner_checklist') {
    this.storageKey = storageKey;
    this.checkedIds = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return INITIAL_CHECKLIST.filter(item => item.required).map(item => item.id);
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.checkedIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  toggleCheck(accId) {
    if (this.checkedIds.includes(accId)) {
      this.checkedIds = this.checkedIds.filter(id => id !== accId);
    } else {
      this.checkedIds.push(accId);
    }
    this.saveState();
  }

  isChecked(accId) {
    return this.checkedIds.includes(accId);
  }

  getTotalBudget() {
    return this.checkedIds.reduce((sum, id) => {
      const item = ACCESSORIES.find(a => a.id === id);
      return sum + (item ? item.price : 0);
    }, 0);
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const totalCount = INITIAL_CHECKLIST.length;
    const checkedCount = INITIAL_CHECKLIST.filter(item => this.isChecked(item.id)).length;
    const progressPercent = Math.round((checkedCount / totalCount) * 100);
    const totalBudget = this.getTotalBudget();

    container.innerHTML = `
      <div class="checklist-header">
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 800;">
            <i class="fas fa-clipboard-check" style="color: var(--tesla-red);"></i> 新車提車 Top 10 必備裝備點檢表
          </h2>
          <p style="color: var(--text-muted);">專為新提車 Tesla 車主整理，勾選您的選購目標，自動計算總預算</p>
        </div>
        
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: var(--text-muted);">預計購置總花費</div>
          <div style="font-size: 1.8rem; font-weight: 900; color: var(--tesla-red);">
            NT$ ${totalBudget.toLocaleString()}
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px; font-weight: 600;">
        <span>準備進度 (${checkedCount} / ${totalCount})</span>
        <span>${progressPercent}% 完成</span>
      </div>
      <div class="progress-bar-outer">
        <div class="progress-bar-inner" style="width: ${progressPercent}%;"></div>
      </div>

      <div>
        ${INITIAL_CHECKLIST.map(checkItem => {
          const item = ACCESSORIES.find(a => a.id === checkItem.id);
          if (!item) return '';
          const checked = this.isChecked(item.id);

          return `
            <div class="checklist-item">
              <input type="checkbox" class="checklist-checkbox" data-acc-id="${item.id}" ${checked ? 'checked' : ''}>
              <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
              <div class="checklist-info">
                <div class="checklist-title">
                  ${item.name} 
                  ${checkItem.required ? '<span style="color: var(--tesla-red); font-size: 0.75rem; margin-left: 6px;">[必備]</span>' : ''}
                </div>
                <div class="checklist-note"><i class="fas fa-info-circle"></i> ${checkItem.note}</div>
              </div>
              <div style="text-align: right; font-weight: 800; color: var(--text-main); font-size: 1.1rem; min-width: 100px;">
                NT$ ${item.price.toLocaleString()}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
        <button id="btn-copy-checklist" class="nav-btn">
          <i class="fas fa-copy"></i> 複製清單與預算文本
        </button>
      </div>
    `;

    container.querySelectorAll('.checklist-checkbox').forEach(box => {
      box.addEventListener('change', (e) => {
        const id = e.target.dataset.accId;
        this.toggleCheck(id);
        this.render(containerId);
      });
    });

    const copyBtn = document.getElementById('btn-copy-checklist');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const textLines = INITIAL_CHECKLIST
          .filter(c => this.isChecked(c.id))
          .map(c => {
            const item = ACCESSORIES.find(a => a.id === c.id);
            return `[✓] ${item.name} - NT$ ${item.price.toLocaleString()}`;
          });
        
        const output = `🚗 【我的 Tesla 配件採購清單】\n${textLines.join('\n')}\n--------------------\n💰 總估算預算: NT$ ${totalBudget.toLocaleString()}`;
        
        navigator.clipboard.writeText(output).then(() => {
          alert('採購清單已成功複製至剪貼簿！');
        });
      });
    }
  }
}
