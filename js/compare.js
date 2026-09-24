/**
 * Accessory Comparison Engine
 * Handles comparison drawer, side-by-side spec comparisons.
 */

import { ACCESSORIES } from './data.js?v=20260922_v3';

export class CompareEngine {
  constructor() {
    this.selectedIds = [];
  }

  toggleItem(id) {
    if (this.selectedIds.includes(id)) {
      this.selectedIds = this.selectedIds.filter(i => i !== id);
    } else {
      if (this.selectedIds.length >= 3) {
        alert('最多同時選擇 3 項配件進行橫向比較！');
        return false;
      }
      this.selectedIds.push(id);
    }
    return true;
  }

  isSelected(id) {
    return this.selectedIds.includes(id);
  }

  clear() {
    this.selectedIds = [];
  }

  renderModalContent() {
    if (this.selectedIds.length === 0) {
      return `<div style="text-align: center; padding: 3rem; color: var(--text-muted);">尚未選擇任何配件進行比較。</div>`;
    }

    const items = this.selectedIds.map(id => ACCESSORIES.find(a => a.id === id)).filter(Boolean);

    return `
      <div style="padding: 2rem;">
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem; text-align: center;">
          <i class="fas fa-columns" style="color: var(--tesla-red);"></i> 配件規格與指標橫向對比
        </h2>

        <div style="display: grid; grid-template-columns: repeat(${items.length}, 1fr); gap: 1.5rem;">
          ${items.map(item => `
            <div class="glass-panel" style="padding: 1.25rem;">
              <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
              <h3 style="font-size: 1.05rem; font-weight: 700; height: 3rem; line-height: 1.3;">${item.name}</h3>
              
              <div style="font-size: 1.5rem; font-weight: 900; color: var(--tesla-red); margin: 1rem 0;">
                NT$ ${item.price.toLocaleString()}
              </div>

              <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem; font-size: 0.85rem;">
                <div style="margin-bottom: 6px;"><strong>品牌：</strong> ${item.brand}</div>
                <div style="margin-bottom: 6px;"><strong>評價分數：</strong> ⭐ ${item.rating} (${item.reviewsCount}則)</div>
                <div style="margin-bottom: 6px;"><strong>安裝難易：</strong> 
                  <span class="badge-difficulty ${item.difficulty}">${item.difficulty.toUpperCase()} (${item.installTime})</span>
                </div>
                <div style="margin-bottom: 6px;"><strong>安裝類型：</strong> ${item.installType}</div>
              </div>

              <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem; margin-top: 0.75rem;">
                <strong style="font-size: 0.85rem; color: var(--accent-green);">✓ 主要優點：</strong>
                <ul style="padding-left: 1.2rem; font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
                  ${item.pros.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>

              <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem; margin-top: 0.75rem;">
                <strong style="font-size: 0.85rem; color: var(--accent-amber);">⚠ 注意事項：</strong>
                <ul style="padding-left: 1.2rem; font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
                  ${item.cons.map(c => `<li>${c}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}
