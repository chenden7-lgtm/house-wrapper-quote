import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { syncDataJs } from './syncDataJs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const STORE_PATH = path.join(DATA_DIR, 'store.json');

export class Database {
  constructor() {
    this.ensureDirectory();
    this.state = this.load();
  }

  ensureDirectory() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  load() {
    if (fs.existsSync(STORE_PATH)) {
      try {
        const text = fs.readFileSync(STORE_PATH, 'utf8');
        return JSON.parse(text);
      } catch (e) {
        console.error('Failed to load store.json, reinitializing...', e.message);
      }
    }
    return {
      products: [],
      syncStats: {
        lastSyncTime: null,
        sitemapsFound: 0,
        categoryPagesCrawled: 0,
        paginationPagesCrawled: 0,
        totalUrlsDiscovered: 0,
        preDedupCount: 0,
        postDedupCount: 0,
        successfulCount: 0,
        failedUrls: [],
        addedCount: 0,
        updatedCount: 0,
        delistedCount: 0
      }
    };
  }

  save() {
    fs.writeFileSync(STORE_PATH, JSON.stringify(this.state, null, 2), 'utf8');
    try {
      syncDataJs();
    } catch (e) {
      console.error('Failed to sync js/data.js:', e.message);
    }
  }

  getProducts() {
    return this.state.products || [];
  }

  getStats() {
    return this.state.syncStats || {};
  }

  getRandomSample(count = 20) {
    const prods = [...this.getProducts()];
    // Shuffle array deterministically or randomly
    const shuffled = prods.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  /**
   * Updates store with newly crawled products, executing deduplication and soft-delete detection.
   */
  updateCatalog(crawledProducts, statsMetrics) {
    const existingMap = new Map();
    (this.state.products || []).forEach(p => {
      existingMap.set(p.canonicalUrl || p.id, p);
    });

    const preDedupCount = crawledProducts.length;
    const deduplicatedMap = new Map();

    // Deduplicate by Canonical URL / Product ID
    crawledProducts.forEach(p => {
      const key = p.canonicalUrl || p.id;
      if (!deduplicatedMap.has(key)) {
        deduplicatedMap.set(key, p);
      }
    });

    const postDedupCount = deduplicatedMap.size;
    const newKeys = new Set(deduplicatedMap.keys());

    let addedCount = 0;
    let updatedCount = 0;
    let delistedCount = 0;

    const mergedProducts = [];

    // Process new and updated items
    for (const [key, freshItem] of deduplicatedMap.entries()) {
      if (existingMap.has(key)) {
        updatedCount++;
        mergedProducts.push({
          ...existingMap.get(key),
          ...freshItem,
          stockStatus: freshItem.stockStatus || 'in_stock',
          lastUpdated: new Date().toISOString()
        });
      } else {
        addedCount++;
        mergedProducts.push({
          ...freshItem,
          lastUpdated: new Date().toISOString()
        });
      }
    }

    // Soft-delete items missing from fresh crawl
    for (const [key, oldItem] of existingMap.entries()) {
      if (!newKeys.has(key)) {
        delistedCount++;
        mergedProducts.push({
          ...oldItem,
          stockStatus: 'possible_delisted',
          lastUpdated: new Date().toISOString()
        });
      }
    }

    this.state.products = mergedProducts;
    this.state.syncStats = {
      lastSyncTime: new Date().toISOString(),
      sitemapsFound: statsMetrics.sitemapsFound || 0,
      categoryPagesCrawled: statsMetrics.categoryPagesCrawled || 0,
      paginationPagesCrawled: statsMetrics.paginationPagesCrawled || 0,
      totalUrlsDiscovered: statsMetrics.urlsDiscovered || postDedupCount,
      preDedupCount: preDedupCount,
      postDedupCount: postDedupCount,
      successfulCount: mergedProducts.filter(p => p.stockStatus !== 'possible_delisted').length,
      failedUrls: statsMetrics.failedUrls || [],
      addedCount: addedCount,
      updatedCount: updatedCount,
      delistedCount: delistedCount
    };

    this.save();
    return this.state.syncStats;
  }
}

export const db = new Database();
