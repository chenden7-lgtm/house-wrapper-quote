import { BaseAdapter } from './baseAdapter.js';

export class QuackAdapter extends BaseAdapter {
  constructor() {
    super('QuackEV (呱樂電驢工坊)', 'https://www.quackev.com');
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
    const productMap = new Map();

    // 1. Robots & Sitemap Discovery
    try {
      console.log(`[QuackAdapter] Checking robots.txt...`);
      const robotsTxt = await this.fetchText(`${this.baseUrl}/robots.txt`);
      const sitemapMatches = robotsTxt.match(/Sitemap:\s*(https?:\/\/[^\s]+)/gi) || [];
      metrics.sitemapsFound = sitemapMatches.length || 1;
    } catch (e) {
      metrics.failedUrls.push({ url: `${this.baseUrl}/robots.txt`, reason: e.message });
    }

    // 2. Discover all Category GIDs dynamically from main catalog menu
    let gids = [3182, 9287, 1692, 2835, 1693, 1694, 1691, 2956, 1697, 2957, 4918, 9589, 9126, 2834];
    try {
      console.log(`[QuackAdapter] Discovering category GIDs from main catalog menu...`);
      const mainHtml = await this.fetchText(`${this.baseUrl}/products/index.php`);
      const discoveredGids = [...new Set((mainHtml.match(/gid=(\d+)/g) || []).map(m => parseInt(m.split('=')[1], 10)))];
      if (discoveredGids.length > 0) {
        gids = [...new Set([...gids, ...discoveredGids])];
      }
    } catch (e) {
      console.warn(`[QuackAdapter] Menu discovery error, using fallback GIDs: ${e.message}`);
    }

    metrics.categoryPagesCrawled = gids.length;

    for (const gid of gids) {
      let page = 1;
      while (true) {
        metrics.paginationPagesCrawled++;
        const catUrl = `${this.baseUrl}/products/index.php?gid=${gid}&page=${page}`;
        try {
          console.log(`[QuackAdapter] Crawling GID ${gid} Page ${page}...`);
          const html = await this.fetchText(catUrl);
          
          // Match all info.php?id=xxx links
          const matches = html.match(/info\.php\?id=(\d+)/g) || [];
          const prodIds = [...new Set(matches.map(m => m.replace('info.php?id=', '')))];

          if (prodIds.length === 0) break;

          for (const pid of prodIds) {
            const detailUrl = `${this.baseUrl}/products/info.php?id=${pid}`;
            discoveredUrls.add(detailUrl);
            
            if (!productMap.has(pid)) {
              productMap.set(pid, { id: pid, url: detailUrl, gid });
            }
          }

          // Check if there is a next page link
          if (!html.includes(`page=${page + 1}`) && !html.includes('下一頁')) {
            break;
          }

          page++;
        } catch (e) {
          metrics.failedUrls.push({ url: catUrl, reason: `GID ${gid} Page ${page} failed: ${e.message}` });
          break;
        }
      }
    }

    metrics.urlsDiscovered = discoveredUrls.size;

    // 3. Crawl details for each unique product
    const standardizedProducts = [];

    for (const [pid, item] of productMap.entries()) {
      try {
        console.log(`[QuackAdapter] Fetching detail for ID ${pid}...`);
        const html = await this.fetchText(item.url);

        // Extract title cleanly from title tag or og:title
        const rawTitleMatch = html.match(/<title>(.*?)<\/title>/i) || html.match(/property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
        let title = rawTitleMatch ? rawTitleMatch[1].replace(/<[^>]+>/g, '').trim() : `呱樂電驢配件 #${pid}`;
        title = title.split('-呱樂電驢工坊')[0].split('-特斯拉改裝')[0].trim();
        if (!title || title.length < 2) title = `呱樂電驢配件 #${pid}`;

        // Extract price
        const priceMatch = html.match(/(?:NT\$|\$)\s*([\d,]+)/i);
        const price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, ''), 10) : 1000;

        // Extract product image
        const tmpImgMatch = html.match(/https?:\/\/[^"'\s]+\/store_image\/quackev\/(?:tmp_)?P[^"'\s]+\.(?:webp|jpg|png|jpeg)/i);
        const anyProdImgMatch = html.match(/https?:\/\/[^"'\s]+\/store_image\/quackev\/(?!G17409)[^"'\s]+\.(?:webp|jpg|png|jpeg)/i);
        const image = tmpImgMatch ? tmpImgMatch[0] : (anyProdImgMatch ? anyProdImgMatch[0] : 'https://www.quackev.com/ogImg.webp');

        // Determine category & fitment
        let category = 'interior';
        if (title.includes('包') || title.includes('組合') || title.includes('套餐')) category = 'bundle';
        else if (title.includes('空力') || title.includes('尾翼') || title.includes('擋泥板') || title.includes('卡鉗') || title.includes('套件') || title.includes('下巴') || title.includes('側裙')) category = 'exterior';
        else if (title.includes('電吸') || title.includes('螢幕') || title.includes('HUD') || title.includes('儀表')) category = 'electronics';

        let fitment = ['m3_highland', 'm3_2021_2023', 'my_classic', 'my_juniper'];
        if (title.includes('煥新3') || title.includes('Model 3 煥新') || title.includes('2024+')) fitment = ['m3_highland'];
        else if (title.includes('煥新Y') || title.includes('Model Y 煥新') || title.includes('2025+')) fitment = ['my_juniper'];
        else if (title.includes('舊Y') || title.includes('Model Y ( 舊') || title.includes('Model Y (~24)')) fitment = ['my_classic'];
        else if (title.includes('舊3') || title.includes('Model 3 ( 舊')) fitment = ['m3_2021_2023', 'm3_2018_2023', 'm3_2017_2020'];
        else if (title.includes('Model S') || title.includes('Model X')) fitment = ['ms_refresh', 'mx_refresh'];

        const cleanBody = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                              .replace(/<style[\s\S]*?<\/style>/gi, '')
                              .replace(/<[^>]+>/g, ' ')
                              .replace(/\s+/g, ' ')
                              .trim();

        standardizedProducts.push({
          id: `quack_${pid}`,
          canonicalUrl: item.url,
          name: `呱樂電驢 - ${title}`,
          officialUrl: item.url,
          source: 'QuackEV 呱樂電驢工坊',
          category: category,
          fitment: fitment,
          price: price,
          priceRange: `NT$ ${price.toLocaleString()}`,
          originalPrice: price,
          stockStatus: 'in_stock',
          variants: [{ name: '標準完工版', price: price, sku: `QK-${pid}`, available: true }],
          shortDescription: cleanBody.slice(0, 150),
          fullDescription: cleanBody.slice(0, 500),
          images: image ? [image] : [],
          lastUpdated: new Date().toISOString()
        });

      } catch (e) {
        metrics.failedUrls.push({ url: item.url, reason: `Detail fetch failed: ${e.message}` });
      }
    }

    return {
      metrics,
      products: standardizedProducts
    };
  }
}
