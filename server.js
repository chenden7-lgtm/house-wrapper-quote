import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, parse } from 'url';
import { db } from './server/db.js';
import { JowuaAdapter } from './server/crawler/jowuaAdapter.js';
import { QuackAdapter } from './server/crawler/quackAdapter.js';
import { matchItem } from './server/searchEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;

let isSyncing = false;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

function matchModel(item, modelId) {
  if (modelId === 'all') return true;
  const title = item.name || '';

  if (modelId.startsWith('m3_')) {
    if (title.includes('Model Y') && !title.includes('Model 3')) return false;
    if (title.includes('Model S') && !title.includes('Model 3')) return false;
    if (title.includes('Model X') && !title.includes('Model 3')) return false;
    if (title.includes('Cybertruck') && !title.includes('Model 3')) return false;
  }

  if (modelId.startsWith('my_')) {
    if (title.includes('Model 3') && !title.includes('Model Y')) return false;
    if (title.includes('Model S') && !title.includes('Model Y')) return false;
    if (title.includes('Model X') && !title.includes('Model Y')) return false;
    if (title.includes('Cybertruck') && !title.includes('Model Y')) return false;
  }

  const fitment = item.fitment || [];
  if (fitment.includes('all')) return true;
  if (modelId === 'm3_highland') return fitment.includes('m3_highland');
  if (modelId === 'm3_2021_2023') return fitment.includes('m3_2021_2023') || fitment.includes('m3_classic');
  if (modelId === 'm3_2018_2023') return fitment.includes('m3_2018_2023') || fitment.includes('m3_classic') || fitment.includes('m3_2021_2023') || fitment.includes('m3_2017_2020');
  if (modelId === 'm3_2017_2020') return fitment.includes('m3_2017_2020') || fitment.includes('m3_classic');
  if (modelId === 'my_classic') return fitment.includes('my_classic');
  if (modelId === 'my_juniper') return fitment.includes('my_juniper');
  return fitment.includes(modelId);
}

const server = http.createServer(async (req, res) => {
  const reqUrl = parse(req.url, true);
  const pathname = reqUrl.pathname;

  // Enable CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // Helper: Admin Auth Verification
  function checkAdminAuth(req) {
    const authHeader = req.headers['authorization'] || '';
    const tokenHeader = req.headers['x-admin-token'] || '';
    return authHeader.includes('token_house_wrapper_admin_authenticated') || tokenHeader === 'token_house_wrapper_admin_authenticated';
  }

  // 0. API: Admin Login Authentication
  if (pathname === '/api/admin/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const username = (data.username || '').trim();
        const password = (data.password || '').trim();

        if (username === 'chenden7' && password === 'q120591') {
          const token = 'token_house_wrapper_admin_authenticated';
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({ success: true, token, message: '登入驗證成功！' }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({ success: false, message: '帳號或密碼錯誤，請重新輸入！' }));
        }
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ success: false, message: '無效的請求格式' }));
      }
    });
    return;
  }

  // 1. API: Products Search & Filtering
  if (pathname === '/api/products' && req.method === 'GET') {
    const q = (reqUrl.query.q || '').trim();
    const modelId = reqUrl.query.modelId || 'all';
    const storeId = reqUrl.query.storeId || 'all';
    const category = reqUrl.query.category || 'all';
    const stockStatus = reqUrl.query.stockStatus || 'all';

    let products = db.getProducts();

    if (q) {
      products = products.filter(item => matchItem(item, q));
    }

    if (storeId !== 'all') {
      products = products.filter(item => {
        if (storeId === 'jowua') return item.source.includes('Jowua');
        if (storeId === 'quackev') return item.source.includes('QuackEV') || item.source.includes('呱樂');
        return true;
      });
    }

    if (category !== 'all') {
      products = products.filter(item => item.category === category);
    }

    if (stockStatus !== 'all') {
      products = products.filter(item => item.stockStatus === stockStatus);
    }

    if (modelId !== 'all') {
      products = products.filter(item => matchModel(item, modelId));
    }

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ total: products.length, products }));
  }

  // 2. API: Trigger Sync (Requires Admin Auth)
  if (pathname === '/api/sync' && req.method === 'POST') {
    if (!checkAdminAuth(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ error: '未授權存取，請先登入管理帳號！', code: 'NEED_LOGIN' }));
    }

    if (isSyncing) {
      res.writeHead(409, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ error: 'Sync task is already running in background.' }));
    }

    isSyncing = true;
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ message: 'Sync task started successfully in background.' }));

    (async () => {
      try {
        console.log('=== Starting full automated sync ===');
        const jowua = new JowuaAdapter();
        const quack = new QuackAdapter();

        const jowuaRes = await jowua.runCrawl();
        const quackRes = await quack.runCrawl();

        const combinedProducts = [...jowuaRes.products, ...quackRes.products];
        const combinedMetrics = {
          sitemapsFound: jowuaRes.metrics.sitemapsFound + quackRes.metrics.sitemapsFound,
          categoryPagesCrawled: jowuaRes.metrics.categoryPagesCrawled + quackRes.metrics.categoryPagesCrawled,
          paginationPagesCrawled: jowuaRes.metrics.paginationPagesCrawled + quackRes.metrics.paginationPagesCrawled,
          urlsDiscovered: jowuaRes.metrics.urlsDiscovered + quackRes.metrics.urlsDiscovered,
          failedUrls: [...jowuaRes.metrics.failedUrls, ...quackRes.metrics.failedUrls]
        };

        const finalStats = db.updateCatalog(combinedProducts, combinedMetrics);
        console.log('=== Sync completed successfully ===', finalStats);
      } catch (e) {
        console.error('Sync error:', e.message);
      } finally {
        isSyncing = false;
      }
    })();
    return;
  }

  // 3. API: Sync Status
  if (pathname === '/api/sync/status' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ isSyncing, stats: db.getStats() }));
  }

  // 4. API: Admin Stats (Requires Admin Auth)
  if (pathname === '/api/admin/stats' && req.method === 'GET') {
    if (!checkAdminAuth(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ error: '未授權存取，請先登入管理帳號！', code: 'NEED_LOGIN' }));
    }

    const products = db.getProducts();
    const modelCounts = {
      all: products.length,
      m3_highland: products.filter(p => matchModel(p, 'm3_highland')).length,
      m3_2021_2023: products.filter(p => matchModel(p, 'm3_2021_2023')).length,
      m3_2018_2023: products.filter(p => matchModel(p, 'm3_2018_2023')).length,
      m3_2017_2020: products.filter(p => matchModel(p, 'm3_2017_2020')).length,
      my_classic: products.filter(p => matchModel(p, 'my_classic')).length,
      my_juniper: products.filter(p => matchModel(p, 'my_juniper')).length,
      ms_refresh: products.filter(p => matchModel(p, 'ms_refresh')).length,
      mx_refresh: products.filter(p => matchModel(p, 'mx_refresh')).length,
      cybertruck: products.filter(p => matchModel(p, 'cybertruck')).length
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ stats: db.getStats(), totalProducts: products.length, modelCounts }));
  }

  // 5. API: Admin 20-Sample Audit (Requires Admin Auth)
  if (pathname === '/api/admin/sample' && req.method === 'GET') {
    if (!checkAdminAuth(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ error: '未授權存取，請先登入管理帳號！', code: 'NEED_LOGIN' }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ sample: db.getRandomSample(20) }));
  }

  // Serve static files
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') safePath = '/index.html';

  const filePath = path.join(__dirname, safePath);
  const ext = path.extname(filePath).toLowerCase();

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found');
    }

    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`好室多膜配件查詢系統 Server listening at http://localhost:${PORT}`);
});
