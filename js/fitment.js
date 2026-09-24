/**
 * Fitment & Filtering Engine - Store & Bundle Aware
 * Filters accessories and combo packages by model, store brand, product type, and category.
 */

import { ACCESSORIES, BUNDLES, TESLA_MODELS } from './data.js?v=20260924_v100';

export class FitmentEngine {
  constructor() {
    this.selectedModelId = 'all';
    this.selectedStoreId = 'all'; // 'all' | 'quackev' | 'jowua'
    this.selectedCategory = 'all';
    this.productType = 'all'; // 'all' | 'single' | 'bundle'
    this.searchQuery = '';
    this.sortBy = 'popular';
  }

  setModel(modelId) {
    this.selectedModelId = modelId;
  }

  setStore(storeId) {
    this.selectedStoreId = storeId;
  }

  setCategory(catId) {
    this.selectedCategory = catId;
  }

  setProductType(type) {
    this.productType = type;
  }

  setSearchQuery(query) {
    this.searchQuery = query.trim().toLowerCase();
  }

  setSortBy(sortKey) {
    this.sortBy = sortKey;
  }

  getSelectedModelObj() {
    return TESLA_MODELS.find(m => m.id === this.selectedModelId) || TESLA_MODELS[0];
  }

  /**
   * Evaluates if a given item (single or bundle) is compatible with selected Tesla model.
   */
  checkCompatibility(item, modelId = this.selectedModelId) {
    if (modelId === 'all') {
      return { status: 'fit', note: '通用適配所有車型' };
    }

    const compats = item.fitment || item.compatibilities || ['all'];
    const title = item.name || '';

    // Title Negative Exclusivity Guard
    if (modelId.startsWith('m3_')) {
      if (title.includes('Model Y') && !title.includes('Model 3')) {
        return { status: 'incompatible', note: '僅適配 Model Y 車型' };
      }
      if (title.includes('Model S') && !title.includes('Model 3')) {
        return { status: 'incompatible', note: '僅適配 Model S 車型' };
      }
      if (title.includes('Model X') && !title.includes('Model 3')) {
        return { status: 'incompatible', note: '僅適配 Model X 車型' };
      }
      if (title.includes('Cybertruck') && !title.includes('Model 3')) {
        return { status: 'incompatible', note: '僅適配 Cybertruck 車型' };
      }
    }

    if (modelId.startsWith('my_')) {
      if (title.includes('Model 3') && !title.includes('Model Y')) {
        return { status: 'incompatible', note: '僅適配 Model 3 車型' };
      }
      if (title.includes('Model S') && !title.includes('Model Y')) {
        return { status: 'incompatible', note: '僅適配 Model S 車型' };
      }
      if (title.includes('Model X') && !title.includes('Model Y')) {
        return { status: 'incompatible', note: '僅適配 Model X 車型' };
      }
      if (title.includes('Cybertruck') && !title.includes('Model Y')) {
        return { status: 'incompatible', note: '僅適配 Cybertruck 車型' };
      }
    }

    // Handle split Model 3 model IDs: m3_highland, m3_2021_2023, m3_2018_2023, m3_2017_2020
    if (modelId === 'm3_highland') {
      const isFit = compats.includes('all') || compats.includes('m3_highland');
      return isFit ? { status: 'fit', note: '100% 專車相容 (2024+)' } : { status: 'incompatible', note: '未適配 2024+ 車型' };
    }

    if (modelId === 'm3_2021_2023') {
      if (title.includes('舊版中控 2017-2020') || title.includes('2017-2020 舊版')) {
        return { status: 'incompatible', note: '僅適配 2017-2020 舊版中控' };
      }
      const isFit = compats.includes('all') || compats.includes('m3_classic') || compats.includes('m3_2021_2023') || compats.includes('m3_2018_2023');
      return isFit ? { status: 'fit', note: '100% 專車相容 (2021-2023)' } : { status: 'incompatible', note: '未適配 2021-2023 車型' };
    }

    if (modelId === 'm3_2018_2023') {
      const isFit = compats.includes('all') || compats.includes('m3_classic') || compats.includes('m3_2018_2023') || compats.includes('m3_2021_2023') || compats.includes('m3_2017_2020');
      return isFit ? { status: 'fit', note: '100% 專車相容 (2018-2023 全車系)' } : { status: 'incompatible', note: '未適配 2018-2023 車型' };
    }

    if (modelId === 'm3_2017_2020') {
      if (title.includes('新版中控 2021-2023') || title.includes('45W HUB集線器 (雙 USB-C 版)') || (title.includes('中控收納盒') && title.includes('2021-2023'))) {
        return { status: 'incompatible', note: '僅適配 2021-2023 滑蓋中控' };
      }
      const isFit = compats.includes('all') || compats.includes('m3_classic') || compats.includes('m3_2017_2020') || compats.includes('m3_2018_2023');
      return isFit ? { status: 'fit', note: '100% 專車相容 (2018-2020)' } : { status: 'incompatible', note: '未適配 2018-2020 車型' };
    }

    const isDirectMatch = compats.includes('all') || compats.includes(modelId);
    const hasSpecificNote = item.incompatibleNotes && item.incompatibleNotes[modelId];

    if (isDirectMatch) {
      if (hasSpecificNote) {
        return { status: 'warn', note: hasSpecificNote };
      }
      return { status: 'fit', note: '100% 專車相容' };
    } else {
      return {
        status: 'incompatible',
        note: hasSpecificNote || '此版型未適配該年份/車型'
      };
    }
  }

  getFilteredSingleItems() {
    return ACCESSORIES.filter(item => {
      // Model Fitment Filter - Filter out incompatible items when a specific model is selected!
      if (this.selectedModelId !== 'all') {
        const compat = this.checkCompatibility(item, this.selectedModelId);
        if (compat.status === 'incompatible') {
          return false;
        }
      }
      // Store filter
      const itemStoreId = item.storeId || (item.brand === 'Jowua' || (item.source && item.source.includes('Jowua')) || (item.id && item.id.includes('jowua')) ? 'jowua' : 'quackev');
      if (this.selectedStoreId !== 'all' && itemStoreId !== this.selectedStoreId) {
        return false;
      }
      // Category Filter
      if (this.selectedCategory !== 'all' && item.category !== this.selectedCategory) {
        return false;
      }
      // Search Query with Synonym Engine & Full-width Normalization
      if (this.searchQuery) {
        const normQuery = this.normalize(this.searchQuery);
        const keywords = normQuery.split(/\s+/).filter(Boolean);

        const searchableText = this.normalize([
          item.name,
          item.brand,
          item.description,
          item.category,
          (item.fitment || []).join(' '),
          (item.tags || []).join(' '),
          (item.variants || []).map(v => v.name + ' ' + (v.title || '')).join(' ')
        ].join(' '));

        const isMatch = keywords.every(kw => {
          const expansions = this.expandSynonyms(kw);
          return expansions.some(syn => searchableText.includes(syn));
        });

        if (!isMatch) return false;
      }
      return true;
    }).sort((a, b) => this.sortItems(a, b));
  }

  normalize(text) {
    if (!text) return '';
    return text
      .replace(/[\uFF01-\uFF5E]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
      .replace(/[\u3000]/g, ' ')
      .toLowerCase()
      .trim();
  }

  expandSynonyms(term) {
    const norm = this.normalize(term);
    if (!norm) return [];
    const map = {
      'm3': ['m3', 'model3', 'model 3', 'highland', '煥新3', '煥新 3'],
      'model3': ['m3', 'model3', 'model 3', 'highland', '煥新3', '煥新 3'],
      'model 3': ['m3', 'model3', 'model 3', 'highland', '煥新3', '煥新 3'],
      'highland': ['highland', 'm3', 'model 3', '煥新3', '煥新 3', '2024+'],
      '煥新3': ['highland', 'm3', 'model 3', '煥新3', '煥新 3', '2024+'],
      'my': ['my', 'modely', 'model y', 'juniper', '煥新y', '煥新 y'],
      'modely': ['my', 'modely', 'model y', 'juniper', '煥新y', '煥新 y'],
      'model y': ['my', 'modely', 'model y', 'juniper', '煥新y', '煥新 y'],
      'juniper': ['juniper', 'my', 'model y', '煥新y', '煥新 y', '2025+'],
      '煥新y': ['juniper', 'my', 'model y', '煥新y', '煥新 y', '2025+'],
      '行李箱': ['行李箱', '後車廂', '後廂', '尾箱', '底盤墊'],
      '後車廂': ['行李箱', '後車廂', '後廂', '尾箱', '底盤墊'],
      '後廂': ['行李箱', '後車廂', '後廂', '尾箱', '底盤墊'],
      '尾箱': ['行李箱', '後車廂', '後廂', '尾箱', '底盤墊'],
      '輪框': ['輪框', '輪圈', '節能蓋', '輪框蓋', '鋁圈'],
      '輪圈': ['輪框', '輪圈', '節能蓋', '輪框蓋', '鋁圈'],
      '節能蓋': ['輪框', '輪圈', '節能蓋', '輪框蓋', '鋁圈'],
      '腳踏墊': ['腳踏墊', '地墊', '地毯', '防水墊', '踏墊'],
      '車宿': ['車宿', '露營', '床墊', '車中泊'],
      '露營': ['車宿', '露營', '床墊', '車中泊'],
      '床墊': ['車宿', '露營', '床墊', '車中泊'],
      '集線器': ['集線器', 'hub', '4 port', '3 port', '擴充'],
      'hub': ['集線器', 'hub', '4 port', '3 port', '擴充'],
      '遮陽簾': ['遮陽簾', '遮陽', '天窗', '隔熱']
    };

    const synonyms = new Set([norm]);
    for (const [k, list] of Object.entries(map)) {
      if (list.includes(norm) || k === norm) {
        list.forEach(i => synonyms.add(this.normalize(i)));
      }
    }
    return Array.from(synonyms);
  }

  getFilteredBundles() {
    return BUNDLES.filter(bundle => {
      // Model Fitment Filter - Filter out incompatible bundles when a specific model is selected!
      if (this.selectedModelId !== 'all') {
        const compat = this.checkCompatibility(bundle, this.selectedModelId);
        if (compat.status === 'incompatible') {
          return false;
        }
      }
      // Store filter
      const bundleStoreId = bundle.storeId || (bundle.brand === 'Jowua' || (bundle.source && bundle.source.includes('Jowua')) || (bundle.id && bundle.id.includes('jowua')) ? 'jowua' : 'quackev');
      if (this.selectedStoreId !== 'all' && bundleStoreId !== this.selectedStoreId) {
        return false;
      }
      // Search Query
      if (this.searchQuery) {
        const titleMatch = (bundle.name || '').toLowerCase().includes(this.searchQuery);
        const descMatch = (bundle.description || '').toLowerCase().includes(this.searchQuery);
        const items = Array.isArray(bundle.itemsIncluded) ? bundle.itemsIncluded : [];
        const itemsMatch = items.some(i => (i || '').toLowerCase().includes(this.searchQuery));
        if (!titleMatch && !descMatch && !itemsMatch) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => this.sortItems(a, b));
  }

  sortItems(a, b) {
    if (this.selectedModelId !== 'all') {
      const compatA = this.checkCompatibility(a).status;
      const compatB = this.checkCompatibility(b).status;
      if (compatA === 'incompatible' && compatB !== 'incompatible') return 1;
      if (compatA !== 'incompatible' && compatB === 'incompatible') return -1;
    }

    if (this.sortBy === 'price_asc') {
      return a.price - b.price;
    } else if (this.sortBy === 'price_desc') {
      return b.price - a.price;
    }
    return 0; // Default order
  }
}
