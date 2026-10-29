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
    if (!item) return { status: 'incompatible', note: '無效項目' };

    const title = item.name || '';
    const id = item.id || '';
    const compats = item.fitment || item.compatibilities || ['all'];

    // 1. Non-car accessories & demo/test items
    const NON_CAR_REGEX = /滑板車|電動滑板車|UpPromote|勿下單|Powerwall|場勘費用|配電箱|呱樂電驢配件\s*#/i;
    if (NON_CAR_REGEX.test(title) || NON_CAR_REGEX.test(id)) {
      return { status: 'incompatible', note: '非 Tesla 車用配件' };
    }

    // 2. Non-Tesla vehicle accessories (Foxtron, Luxgen, Volvo, Toyota, MG, Ford Mach-E)
    const NON_TESLA_CAR_REGEX = /Foxtron|Cavira|Bria|LUXGEN|n7|n⁷|bZ4X|Toyota|Volvo|EX30|MG4|MG\s*4|Mustang|Mach-E/i;
    if (NON_TESLA_CAR_REGEX.test(title)) {
      if (!/Model\s*[3YSX]|Tesla|全車系/i.test(title)) {
        return { status: 'incompatible', note: '非 Tesla 車型專用配件' };
      }
    }

    if (modelId === 'all') {
      return { status: 'fit', note: '通用適配所有車型' };
    }

    // 3. Negative Exclusivity Guards for Model Y
    if (modelId.startsWith('my_')) {
      // 18-inch wheels are exclusively for Model 3 (Model Y uses 19, 20, 21-inch)
      if (/18\s*吋/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Model 3 車型 (18吋)' };
      }

      // Model 3 exclusives (mentions Model 3 / Highland, but NOT Model Y or 3/Y)
      if ((/Model\s*3|煥新\s*3|舊\s*3|Highland/i.test(title)) && !/Model\s*Y|MY|3\/Y|3與Y|3和Y|3\+Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Model 3 車型' };
      }

      // Model S, X, Cybertruck exclusives
      if (/Model\s*S/i.test(title) && !/Model\s*Y|3\/Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Model S 車型' };
      }
      if (/Model\s*X/i.test(title) && !/Model\s*Y|3\/Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Model X 車型' };
      }
      if (/Cybertruck/i.test(title) && !/Model\s*Y|3\/Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Cybertruck 車型' };
      }

      // Classic Model Y (2020-2024 舊款)
      if (modelId === 'my_classic') {
        const isJuniperOnly = (/2025\+|煥新\s*Y|煥新版\s*Model\s*Y|Juniper/i.test(title) || 
                              (/煥新版\s*Model\s*3\/Y|煥新\s*Model\s*3\/Y|煥新\s*3\/Y/i.test(title))) &&
                              !/2021-2024|~2024|舊Y|舊\s*Y|新\/舊|新舊|各版本|全車系/i.test(title);
        if (isJuniperOnly) {
          return { status: 'incompatible', note: '僅適配 Model Y 煥新版 (2025+)' };
        }
        if (compats.length === 1 && compats[0] === 'my_juniper') {
          return { status: 'incompatible', note: '僅適配 Model Y 煥新版 (2025+)' };
        }
      }

      // Juniper Model Y (2025+ 煥新版)
      if (modelId === 'my_juniper') {
        const isClassicOnly = (/(~2024|～24|~24|2020-2024|2021-2024|舊\s*Y|舊款\s*Model\s*3\/Y|舊\s*Model\s*3\/Y|舊版\s*Model\s*3\/Y)/i.test(title)) &&
                              !/2025\+|煥新|新\/舊|新舊|各版本|全車系/i.test(title);
        if (isClassicOnly) {
          return { status: 'incompatible', note: '僅適配 Model Y (2020-2024) 舊款' };
        }
        if (compats.length === 1 && compats[0] === 'my_classic') {
          return { status: 'incompatible', note: '未適配 2025+ 煥新版' };
        }
      }
    }

    // 4. Negative Exclusivity Guards for Model 3
    if (modelId.startsWith('m3_')) {
      // Model Y exclusives
      if (/Model\s*Y|節能蓋MY/i.test(title) && !/Model\s*3|3\/Y|3與Y|3和Y|3\+Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Model Y 車型' };
      }
      if (/Model\s*S/i.test(title) && !/Model\s*3|3\/Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Model S 車型' };
      }
      if (/Model\s*X/i.test(title) && !/Model\s*3|3\/Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Model X 車型' };
      }
      if (/Cybertruck/i.test(title) && !/Model\s*3|3\/Y|全車系/i.test(title)) {
        return { status: 'incompatible', note: '僅適配 Cybertruck 車型' };
      }

      if (modelId === 'm3_highland') {
        if (/2017-2020|2021-2023|舊版\s*Model\s*3\/Y|舊款\s*Model\s*3\/Y|舊\s*Model\s*3/i.test(title) && !/2024\+|Highland|煥新|新\/舊|新舊|各版本|全車系/i.test(title)) {
          return { status: 'incompatible', note: '未適配 2024+ 煥新版' };
        }
        const isFit = compats.includes('all') || compats.includes('m3_highland');
        return isFit ? { status: 'fit', note: '100% 專車相容 (2024+)' } : { status: 'incompatible', note: '未適配 2024+ 車型' };
      }

      if (modelId === 'm3_2021_2023') {
        if (/2024\+|Highland|煥新/i.test(title) && !/2021-2023|舊\s*3|新\/舊|新舊|各版本|全車系/i.test(title)) {
          return { status: 'incompatible', note: '僅適配 2024+ 煥新版' };
        }
        if (title.includes('舊版中控 2017-2020') || title.includes('2017-2020 舊版')) {
          return { status: 'incompatible', note: '僅適配 2017-2020 舊版中控' };
        }
        const isFit = compats.includes('all') || compats.includes('m3_classic') || compats.includes('m3_2021_2023') || compats.includes('m3_2018_2023');
        return isFit ? { status: 'fit', note: '100% 專車相容 (2021-2023)' } : { status: 'incompatible', note: '未適配 2021-2023 車型' };
      }

      if (modelId === 'm3_2018_2023') {
        if (/2024\+|Highland|煥新/i.test(title) && !/2018-2023|舊\s*3|新\/舊|新舊|各版本|全車系/i.test(title)) {
          return { status: 'incompatible', note: '僅適配 2024+ 煥新版' };
        }
        const isFit = compats.includes('all') || compats.includes('m3_classic') || compats.includes('m3_2018_2023') || compats.includes('m3_2021_2023') || compats.includes('m3_2017_2020');
        return isFit ? { status: 'fit', note: '100% 專車相容 (2018-2023 全車系)' } : { status: 'incompatible', note: '未適配 2018-2023 車型' };
      }

      if (modelId === 'm3_2017_2020') {
        if (/2024\+|Highland|煥新|2021-2023/i.test(title) && !/2017-2020|舊\s*3|新\/舊|新舊|各版本|全車系/i.test(title)) {
          return { status: 'incompatible', note: '僅適配新版中控' };
        }
        const isFit = compats.includes('all') || compats.includes('m3_classic') || compats.includes('m3_2017_2020') || compats.includes('m3_2018_2023');
        return isFit ? { status: 'fit', note: '100% 專車相容 (2018-2020)' } : { status: 'incompatible', note: '未適配 2018-2020 車型' };
      }
    }

    // 5. Negative Exclusivity Guards for Model S, Model X, Cybertruck
    if (modelId === 'ms_refresh') {
      if (/Model\s*[3YX]|Cybertruck/i.test(title) && !/Model\s*S|全車系/i.test(title)) {
        return { status: 'incompatible', note: '未適配 Model S 車型' };
      }
    }
    if (modelId === 'mx_refresh') {
      if (/Model\s*[3YS]|Cybertruck/i.test(title) && !/Model\s*X|全車系/i.test(title)) {
        return { status: 'incompatible', note: '未適配 Model X 車型' };
      }
    }
    if (modelId === 'cybertruck') {
      if (/Model\s*[3YSX]/i.test(title) && !/Cybertruck|全車系/i.test(title)) {
        return { status: 'incompatible', note: '未適配 Cybertruck 車型' };
      }
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
      // Model Fitment Filter - Filter out incompatible items
      const compat = this.checkCompatibility(item, this.selectedModelId);
      if (compat.status === 'incompatible') {
        return false;
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
      // Model Fitment Filter - Filter out incompatible bundles
      const compat = this.checkCompatibility(bundle, this.selectedModelId);
      if (compat.status === 'incompatible') {
        return false;
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
