import { BaseAdapter } from './baseAdapter.js';

export class JowuaAdapter extends BaseAdapter {
  constructor() {
    super('Jowua Global', 'https://global.jowua-life.com');
  }

  async runCrawl() {
    const metrics = {
      sitemapsFound: 0,
      categoryPagesCrawled: 0,
      paginationPagesCrawled: 0,
      urlsDiscovered: 0,
      failedUrls: []
    };

    const discoveredUrls = new Set();
    const rawProducts = [];

    // 1. Sitemap Discovery
    try {
      console.log(`[JowuaAdapter] Checking sitemap.xml...`);
      const sitemapXml = await this.fetchText(`${this.baseUrl}/sitemap.xml`);
      metrics.sitemapsFound++;
      
      const sitemapMatches = sitemapXml.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];
      for (const sm of sitemapMatches) {
        const url = sm.replace('<loc>', '').replace('</loc>', '');
        if (url.includes('sitemap_products')) {
          metrics.sitemapsFound++;
          try {
            const subXml = await this.fetchText(url);
            const prodLocs = subXml.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];
            prodLocs.forEach(pl => {
              const pUrl = pl.replace('<loc>', '').replace('</loc>', '');
              discoveredUrls.add(pUrl);
            });
          } catch (e) {
            metrics.failedUrls.push({ url, reason: `Sub-sitemap fetch failed: ${e.message}` });
          }
        }
      }
    } catch (e) {
      metrics.failedUrls.push({ url: `${this.baseUrl}/sitemap.xml`, reason: `Sitemap fetch failed: ${e.message}` });
    }

    // 2. Fetch Collections metadata for category tagging
    const handleToTagsMap = {};
    try {
      console.log(`[JowuaAdapter] Crawling collections...`);
      const collectionsJson = await this.fetchJson(`${this.baseUrl}/collections.json`);
      const collections = collectionsJson.collections || [];
      metrics.categoryPagesCrawled = collections.length;

      const collectionMap = [
        { handle: 'model3-2024', tag: 'm3_highland' },
        { handle: 'model3_refresh_console', tag: 'm3_2021_2023' },
        { handle: 'model3_prerefresh_console', tag: 'm3_2017_2020' },
        { handle: 'model-s-2021', tag: 'ms_refresh' },
        { handle: 'model-x-2021', tag: 'mx_refresh' },
        { handle: 'model-y-2025', tag: 'my_juniper' },
        { handle: 'model-y-2021-2024', tag: 'my_classic' }
      ];

      for (const cm of collectionMap) {
        try {
          const colRes = await this.fetchJson(`${this.baseUrl}/collections/${cm.handle}/products.json?limit=250`);
          (colRes.products || []).forEach(p => {
            if (!handleToTagsMap[p.handle]) handleToTagsMap[p.handle] = new Set();
            handleToTagsMap[p.handle].add(cm.tag);
          });
        } catch (e) {
          metrics.failedUrls.push({ url: `${this.baseUrl}/collections/${cm.handle}`, reason: e.message });
        }
      }
    } catch (e) {
      metrics.failedUrls.push({ url: `${this.baseUrl}/collections.json`, reason: e.message });
    }

    // 3. Paginate through all products API until page is empty
    let page = 1;
    while (true) {
      metrics.paginationPagesCrawled++;
      const apiUrl = `${this.baseUrl}/products.json?limit=250&page=${page}`;
      try {
        console.log(`[JowuaAdapter] Fetching page ${page}...`);
        const data = await this.fetchJson(apiUrl);
        const products = data.products || [];
        if (products.length === 0) break;

        for (const p of products) {
          const pUrl = `${this.baseUrl}/products/${p.handle}`;
          discoveredUrls.add(pUrl);
          rawProducts.push({ shopifyProduct: p, handleTags: handleToTagsMap[p.handle] || new Set() });
        }

        page++;
      } catch (e) {
        metrics.failedUrls.push({ url: apiUrl, reason: `Page ${page} fetch failed: ${e.message}` });
        break;
      }
    }

    metrics.urlsDiscovered = discoveredUrls.size;

    // 4. Standardize products into output schema
    const standardizedProducts = rawProducts.map(({ shopifyProduct: sp, handleTags }) => {
      const handle = sp.handle;
      const officialUrl = `${this.baseUrl}/products/${handle}`;
      const title = sp.title;
      const tags = sp.tags || [];

      // Determine fitment with Title & Handle Inspection
      let fitmentSet = new Set();
      tags.forEach(t => {
        if (t.includes('Model 3 (2024+')) fitmentSet.add('m3_highland');
        if (t.includes('Model 3 (2021-2023)')) fitmentSet.add('m3_2021_2023');
        if (t.includes('Model 3 (2018-2020)') || t.includes('Model 3 (2017-2020)')) fitmentSet.add('m3_2017_2020');
        if (t.includes('Model Y (2025+')) fitmentSet.add('my_juniper');
        if (t.includes('Model Y') && !t.includes('2025+')) fitmentSet.add('my_classic');
        if (t.includes('Model S/X 2023+') || t.includes('Model S')) fitmentSet.add('ms_refresh');
        if (t.includes('Model S/X 2023+') || t.includes('Model X')) fitmentSet.add('mx_refresh');
      });

      handleTags.forEach(t => fitmentSet.add(t));

      // Title & Handle Vehicle Exclusivity Rules
      const isModelYOnly = (title.includes('Model Y') || handle.includes('model-y') || handle.includes('modely')) && !title.includes('Model 3') && !handle.includes('model-3');
      const isModel3Only = (title.includes('Model 3') || handle.includes('model-3') || handle.includes('model3')) && !title.includes('Model Y') && !handle.includes('model-y');
      const isModelSOnly = (title.includes('Model S') || handle.includes('model-s')) && !title.includes('Model 3') && !title.includes('Model Y');
      const isModelXOnly = (title.includes('Model X') || handle.includes('model-x')) && !title.includes('Model 3') && !title.includes('Model Y');
      const isCybertruckOnly = (title.includes('Cybertruck') || handle.includes('cybertruck'));

      if (isModelYOnly) {
        const myArr = Array.from(fitmentSet).filter(f => f.startsWith('my_'));
        fitmentSet = new Set(myArr.length > 0 ? myArr : (title.includes('煥新') || title.includes('2025') ? ['my_juniper'] : ['my_juniper', 'my_classic']));
      } else if (isModel3Only) {
        const m3Arr = Array.from(fitmentSet).filter(f => f.startsWith('m3_'));
        fitmentSet = new Set(m3Arr.length > 0 ? m3Arr : (title.includes('煥新') || title.includes('2024') ? ['m3_highland'] : ['m3_highland', 'm3_2021_2023', 'm3_2018_2023', 'm3_2017_2020']));
      } else if (isModelSOnly) {
        fitmentSet = new Set(['ms_refresh']);
      } else if (isModelXOnly) {
        fitmentSet = new Set(['mx_refresh']);
      } else if (isCybertruckOnly) {
        fitmentSet = new Set(['cybertruck']);
      } else if (fitmentSet.size === 0) {
        fitmentSet.add('all');
      }

      // Process variants & prices
      let minPrice = Infinity;
      let maxPrice = 0;
      let minComparePrice = Infinity;
      let totalAvailableVariants = 0;

      const variants = (sp.variants || []).map(v => {
        const pr = Math.round(parseFloat(v.price || '0'));
        const comparePr = Math.round(parseFloat(v.compare_at_price || '0'));
        if (pr < minPrice) minPrice = pr;
        if (pr > maxPrice) maxPrice = pr;
        if (comparePr > 0 && comparePr < minComparePrice) minComparePrice = comparePr;
        if (v.available) totalAvailableVariants++;

        return {
          id: v.id,
          name: v.title === 'Default Title' ? '標準規格' : v.title,
          price: pr,
          originalPrice: comparePr > pr ? comparePr : pr,
          sku: v.sku || handle,
          available: Boolean(v.available)
        };
      });

      if (minPrice === Infinity) minPrice = 0;

      const isAvailable = totalAvailableVariants > 0;
      const stockStatus = isAvailable ? 'in_stock' : 'out_of_stock';
      const isBundle = title.includes('組合') || title.includes('包') || title.includes('套餐') || title.includes('組');

      const images = (sp.images || []).map(img => img.src);
      const cleanBody = sp.body_html ? sp.body_html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : title;

      // Exclude RMA / Store RMA dummy test items
      if (handle.includes('rma') || title.toLowerCase().includes('rma') || minPrice >= 99999) {
        return null;
      }

      return {
        id: `jowua_${handle.replace(/-/g, '_')}`,
        canonicalUrl: officialUrl,
        name: `Jowua - ${title}`,
        officialUrl: officialUrl,
        source: 'Jowua Global',
        category: isBundle ? 'bundle' : 'interior',
        fitment: Array.from(fitmentSet),
        price: minPrice,
        priceRange: minPrice !== maxPrice ? `NT$ ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}` : `NT$ ${minPrice.toLocaleString()}`,
        originalPrice: minComparePrice < Infinity && minComparePrice > minPrice ? minComparePrice : minPrice,
        stockStatus: stockStatus,
        variants: variants,
        shortDescription: cleanBody.slice(0, 150),
        fullDescription: cleanBody,
        images: images,
        lastUpdated: new Date().toISOString()
      };
    });

    return {
      metrics,
      products: standardizedProducts.filter(Boolean)
    };
  }
}
