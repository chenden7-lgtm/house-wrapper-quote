/**
 * Vehicle Visualizer Module
 * Interactive car diagram hotspot selection & part fitting display.
 */

import { ACCESSORIES, LOCATIONS } from './data.js?v=20260922_v3';

export class Visualizer {
  constructor(containerId, onSelectPartCallback) {
    this.container = document.getElementById(containerId);
    this.activeLocation = 'console';
    this.onSelectPart = onSelectPartCallback;
  }

  setLocation(locId) {
    this.activeLocation = locId;
    this.render();
  }

  getPartsForActiveLocation() {
    return ACCESSORIES.filter(item => item.location === this.activeLocation);
  }

  render() {
    if (!this.container) return;

    const currentLocationObj = LOCATIONS.find(l => l.id === this.activeLocation) || LOCATIONS[0];
    const parts = this.getPartsForActiveLocation();

    this.container.innerHTML = `
      <div class="visualizer-header">
        <h2><i class="fas fa-car-side" style="color: var(--tesla-red);"></i> 車輛位置實用試裝視角</h2>
        <p>點擊車身視角節點 (如：前備廂、中控台、天窗頂架)，即時查看對應位置的最佳推薦配件</p>
      </div>

      <div class="car-diagram-wrapper">
        <svg class="car-svg-graphic" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 280 C 150 280, 200 280, 250 275 C 320 220, 420 130, 560 125 C 720 120, 810 180, 880 250 C 920 270, 940 280, 950 280 L 960 300 C 930 320, 890 320, 850 320 C 850 280, 780 280, 780 320 L 320 320 C 320 280, 250 280, 250 320 L 100 320 C 80 310, 80 290, 120 280 Z" 
                stroke="var(--tesla-red)" stroke-width="3" fill="rgba(232, 33, 39, 0.05)" />
          
          <path d="M350 210 L 440 145 L 620 145 L 750 210 Z" 
                stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="rgba(255,255,255,0.05)" />
          
          <circle cx="285" cy="315" r="45" stroke="var(--text-main)" stroke-width="4" fill="#111" />
          <circle cx="285" cy="315" r="25" stroke="var(--tesla-red)" stroke-width="2" fill="#222" />
          <circle cx="815" cy="315" r="45" stroke="var(--text-main)" stroke-width="4" fill="#111" />
          <circle cx="815" cy="315" r="25" stroke="var(--tesla-red)" stroke-width="2" fill="#222" />
        </svg>

        <button class="hotspot-node node-frunk ${this.activeLocation === 'frunk' ? 'active' : ''}" data-loc="frunk">
          <i class="fas fa-box-open"></i>
          <span class="hotspot-label">前備廂</span>
        </button>

        <button class="hotspot-node node-screen ${this.activeLocation === 'screen' ? 'active' : ''}" data-loc="screen">
          <i class="fas fa-desktop"></i>
          <span class="hotspot-label">中控螢幕</span>
        </button>

        <button class="hotspot-node node-console ${this.activeLocation === 'console' ? 'active' : ''}" data-loc="console">
          <i class="fas fa-sliders-h"></i>
          <span class="hotspot-label">鞍座與駕駛區</span>
        </button>

        <button class="hotspot-node node-seats ${this.activeLocation === 'seats' ? 'active' : ''}" data-loc="seats">
          <i class="fas fa-chair"></i>
          <span class="hotspot-label">車室與腳踏</span>
        </button>

        <button class="hotspot-node node-roof ${this.activeLocation === 'roof' ? 'active' : ''}" data-loc="roof">
          <i class="fas fa-sun"></i>
          <span class="hotspot-label">天窗與車頂</span>
        </button>

        <button class="hotspot-node node-trunk ${this.activeLocation === 'trunk' ? 'active' : ''}" data-loc="trunk">
          <i class="fas fa-suitcase"></i>
          <span class="hotspot-label">後備廂深槽</span>
        </button>

        <button class="hotspot-node node-wheels ${this.activeLocation === 'wheels' ? 'active' : ''}" data-loc="wheels">
          <i class="fas fa-dharmachakra"></i>
          <span class="hotspot-label">輪圈與側裙</span>
        </button>
      </div>

      <div class="node-parts-display">
        <div class="node-parts-title">
          <i class="fas fa-map-marker-alt"></i> 
          【${currentLocationObj.name}】安載配件推薦 (${parts.length} 項)
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
          ${parts.map(p => `
            <div class="glass-panel" style="padding: 1rem; display: flex; align-items: center; gap: 1rem; cursor: pointer;" data-part-id="${p.id}">
              <img src="${p.image}" alt="${p.name}" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
              <div style="flex: 1;">
                <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 4px;">${p.name}</div>
                <div style="color: var(--tesla-red); font-weight: 800; font-size: 0.95rem;">NT$ ${p.price.toLocaleString()}</div>
              </div>
              <button class="btn-icon-action" title="檢視細節"><i class="fas fa-arrow-right"></i></button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.container.querySelectorAll('.hotspot-node').forEach(node => {
      node.addEventListener('click', (e) => {
        const loc = e.currentTarget.dataset.loc;
        this.setLocation(loc);
      });
    });

    this.container.querySelectorAll('[data-part-id]').forEach(card => {
      card.addEventListener('click', (e) => {
        const partId = e.currentTarget.dataset.partId;
        if (this.onSelectPart) this.onSelectPart(partId);
      });
    });
  }
}
