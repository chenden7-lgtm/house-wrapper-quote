/**
 * Real-Time Official Price Sync Engine
 * Fetches live promotional prices and discounts directly from Jowua Global Shopify Store (products.json API)
 * Automatically updates product prices, variant prices, and promo badges in real-time.
 */

export class PriceSyncEngine {
  constructor(storageKey = 'tesla_live_price_cache') {
    this.storageKey = storageKey;
    this.lastSyncTime = null;
    this.isSyncing = false;
    this.cachedPrices = this.loadCache();
  }

  loadCache() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.lastSyncTime = parsed.timestamp ? new Date(parsed.timestamp) : null;
        return parsed.prices || {};
      }
    } catch (e) {
      console.warn('Live price cache load error:', e);
    }
    return {};
  }

  saveCache(priceMap) {
    try {
      this.lastSyncTime = new Date();
      localStorage.setItem(this.storageKey, JSON.stringify({
        timestamp: this.lastSyncTime.toISOString(),
        prices: priceMap
      }));
    } catch (e) {
      console.warn('Live price cache save error:', e);
    }
  }

  /**
   * Apply cached prices to ACCESSORIES array in memory
   */
  applyCachedPrices(accessories) {
    try {
      if (!this.cachedPrices || typeof this.cachedPrices !== 'object' || Object.keys(this.cachedPrices).length === 0) return 0;
      
      let appliedCount = 0;
      accessories.forEach(item => {
        if (!item || !item.id) return;
        const cached = this.cachedPrices[item.id];
        if (cached && typeof cached === 'object') {
          if (cached.price !== undefined) item.price = cached.price;
          if (cached.originalPrice !== undefined) item.originalPrice = cached.originalPrice;
          if (cached.isOnSale !== undefined) item.isOnSale = cached.isOnSale;
          if (cached.variants && item.variants && Array.isArray(item.variants)) {
            item.variants.forEach(v => {
              if (v && v.id && cached.variants && typeof cached.variants === 'object') {
                const vCached = cached.variants[v.id];
                if (vCached && typeof vCached === 'object') {
                  if (vCached.price !== undefined) v.price = vCached.price;
                  if (vCached.originalPrice !== undefined) v.originalPrice = vCached.originalPrice;
                }
              }
            });
          }
          item.liveUpdated = true;
          appliedCount++;
        }
      });
      return appliedCount;
    } catch (e) {
      console.warn('applyCachedPrices error:', e);
      return 0;
    }
  }

  /**
   * Perform live fetch to official Jowua API and sync prices
   */
  async syncLivePrices(accessories) {
    if (this.isSyncing) return null;
    this.isSyncing = true;

    try {
      // Fetch Page 1 & Page 2 from official Jowua Store
      const fetchUrls = [
        'https://global.jowua-life.com/collections/all/products.json?limit=250&page=1',
        'https://global.jowua-life.com/collections/all/products.json?limit=250&page=2'
      ];

      const responses = await Promise.allSettled(
        fetchUrls.map(url => fetch(url).then(r => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        }))
      );

      let liveProducts = [];
      responses.forEach(res => {
        if (res.status === 'fulfilled' && res.value && Array.isArray(res.value.products)) {
          liveProducts = liveProducts.concat(res.value.products);
        }
      });

      if (liveProducts.length === 0) {
        throw new Error('無法取回 Jowua 官網商品數據');
      }

      // Build quick lookup maps: variantId -> variantObj, cleanTitle -> productObj
      const variantMap = new Map();
      const titleMap = new Map();

      liveProducts.forEach(p => {
        const cleanTitle = p.title.replace(/\s*\(.*?\)/, '').replace(/^Jowua\s*/i, '').trim();
        titleMap.set(cleanTitle, p);

        if (Array.isArray(p.variants)) {
          p.variants.forEach(v => {
            variantMap.set(String(v.id), v);
          });
        }
      });

      const updatedCache = {};
      let updatedItemsCount = 0;

      accessories.forEach(item => {
        if (item.storeId !== 'jowua') return;

        let matchedShopifyProduct = null;
        const cleanItemName = item.name.replace(/\s*\(.*?\)/, '').replace(/^Jowua\s*/i, '').trim();

        // 1. Try title match
        if (titleMap.has(cleanItemName)) {
          matchedShopifyProduct = titleMap.get(cleanItemName);
        } else {
          // Fuzzy title search
          for (const [title, pObj] of titleMap.entries()) {
            if (cleanItemName.includes(title) || title.includes(cleanItemName)) {
              matchedShopifyProduct = pObj;
              break;
            }
          }
        }

        if (matchedShopifyProduct && matchedShopifyProduct.handle) {
          item.handle = matchedShopifyProduct.handle;
          item.link = `https://global.jowua-life.com/products/${matchedShopifyProduct.handle}`;
        }

        const itemCache = { variants: {} };
        let priceChanged = false;

        // Sync Variants if available
        if (item.variants && item.variants.length > 0) {
          item.variants.forEach(v => {
            let matchedV = variantMap.get(String(v.id));

            // If ID match failed, try matching title in matched product
            if (!matchedV && matchedShopifyProduct && matchedShopifyProduct.variants) {
              matchedV = matchedShopifyProduct.variants.find(sv => 
                sv.title.trim() === v.title.trim() ||
                v.title.includes(sv.title.trim()) ||
                sv.title.includes(v.title.trim())
              );
            }

            if (matchedV) {
              const liveVPrice = Math.round(parseFloat(matchedV.price));
              const liveVCompare = matchedV.compare_at_price ? Math.round(parseFloat(matchedV.compare_at_price)) : null;

              if (liveVPrice && liveVPrice !== v.price) {
                v.price = liveVPrice;
                priceChanged = true;
              }
              if (liveVCompare) {
                v.originalPrice = liveVCompare;
              }

              itemCache.variants[v.id] = {
                price: v.price,
                originalPrice: v.originalPrice
              };
            }
          });

          // Update item base price from first variant or lowest price
          const prices = item.variants.map(v => v.price).filter(Boolean);
          if (prices.length > 0) {
            item.price = Math.min(...prices);
          }
        } else if (matchedShopifyProduct && matchedShopifyProduct.variants && matchedShopifyProduct.variants.length > 0) {
          const firstV = matchedShopifyProduct.variants[0];
          const livePrice = Math.round(parseFloat(firstV.price));
          const liveCompare = firstV.compare_at_price ? Math.round(parseFloat(firstV.compare_at_price)) : null;

          if (livePrice && livePrice !== item.price) {
            item.price = livePrice;
            priceChanged = true;
          }
          if (liveCompare) {
            item.originalPrice = liveCompare;
          }
        }

        // Check if item is on sale (price lower than originalPrice)
        if (item.originalPrice && item.price < item.originalPrice) {
          item.isOnSale = true;
        } else {
          item.isOnSale = false;
        }

        item.liveUpdated = true;
        itemCache.price = item.price;
        itemCache.originalPrice = item.originalPrice;
        itemCache.isOnSale = item.isOnSale;

        updatedCache[item.id] = itemCache;
        updatedItemsCount++;
      });

      this.saveCache(updatedCache);
      this.isSyncing = false;

      return {
        success: true,
        checkedCount: liveProducts.length,
        updatedItemsCount,
        timestamp: this.lastSyncTime
      };

    } catch (err) {
      console.error('Live price sync error:', err);
      this.isSyncing = false;
      return {
        success: false,
        error: err.message,
        timestamp: this.lastSyncTime
      };
    }
  }

  getFormattedLastSyncTime() {
    if (!this.lastSyncTime) return '未同步';
    const now = new Date();
    const diffSec = Math.floor((now - this.lastSyncTime) / 1000);

    if (diffSec < 60) return '剛剛';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} 分鐘前`;
    return this.lastSyncTime.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
  }
}
