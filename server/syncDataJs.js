import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORE_PATH = path.join(__dirname, 'data', 'store.json');
const DATA_JS_PATH = path.join(__dirname, '..', 'js', 'data.js');

export function syncDataJs() {
  if (!fs.existsSync(STORE_PATH)) {
    console.error('store.json not found!');
    return;
  }

  const storeText = fs.readFileSync(STORE_PATH, 'utf8');
  const store = JSON.parse(storeText);
  const products = store.products || [];

  const accessories = [];
  const bundles = [];

  products.forEach(p => {
    const item = {
      id: p.id,
      name: p.name,
      brand: p.source.includes('Jowua') ? 'Jowua' : 'QuackEV',
      storeId: p.source.includes('Jowua') ? 'jowua' : 'quackev',
      category: p.category || 'interior',
      fitment: p.fitment || ['all'],
      price: p.price || 1000,
      originalPrice: p.originalPrice || p.price || 1000,
      image: (p.images && p.images[0]) ? p.images[0] : 'https://www.quackev.com/ogImg.webp',
      description: p.shortDescription || p.name,
      officialUrl: p.officialUrl || p.canonicalUrl,
      badge: p.source.includes('Jowua') ? 'Jowua 原廠正品' : '呱樂門市完工',
      variants: p.variants && p.variants.length > 0 ? p.variants.map(v => ({
        id: String(v.id || v.sku || p.id),
        title: v.title || v.name || '標準版',
        name: v.title || v.name || '標準版',
        price: v.price || p.price || 1000,
        sku: v.sku || `SKU-${p.id}`
      })) : [{
        id: `v-${p.id}`,
        title: '標準完工版',
        name: '標準完工版',
        price: p.price || 1000,
        sku: `SKU-${p.id}`
      }]
    };

    if (p.category === 'bundle') {
      bundles.push(item);
    } else {
      accessories.push(item);
    }
  });

  const header = `/**
 * Tesla Accessories Database - QuackEV (呱樂電驢) & Jowua Full Official Catalog
 * 100% Complete Synchronized Database
 */

export const TESLA_MODELS = [
  { "id": "all", "name": "所有 Tesla 車型", "short": "全車型" },
  { "id": "m3_highland", "name": "Model 3 (2024+)", "short": "Model 3 (2024+)", "badge": "2024+" },
  { "id": "m3_2021_2023", "name": "Model 3 (2021-2023)", "short": "Model 3 (2021-2023)", "badge": "新中控" },
  { "id": "m3_2018_2023", "name": "Model 3 (2018-2023)", "short": "Model 3 (2018-2023)", "badge": "2018-2023" },
  { "id": "m3_2017_2020", "name": "Model 3 (2018-2020)", "short": "Model 3 (2018-2020)", "badge": "舊中控" },
  { "id": "my_classic", "name": "Model Y (2020-2024)", "short": "Model Y (2020-2024)" },
  { "id": "my_juniper", "name": "Model Y (2025+)", "short": "Model Y (2025+)", "badge": "煥新版 2025+" },
  { "id": "ms_refresh", "name": "Model S (2021+)", "short": "Model S" },
  { "id": "mx_refresh", "name": "Model X (2021+)", "short": "Model X" },
  { "id": "cybertruck", "name": "Cybertruck", "short": "Cybertruck", "badge": "Cybertruck" }
];

export const STORES = [
  { "id": "all", "name": "全店家總覽" },
  { "id": "quackev", "name": "QuackEV (呱樂電驢工坊)" },
  { "id": "jowua", "name": "Jowua Global" }
];

export const CATEGORIES = [
  { "id": "all", "name": "全部品項與組合", "icon": "fa-th-large" },
  { "id": "interior", "name": "內飾與防護", "icon": "fa-shield-alt" },
  { "id": "electronics", "name": "電子與車機週邊", "icon": "fa-bolt" },
  { "id": "exterior", "name": "外觀改裝與電吸門", "icon": "fa-car" },
  { "id": "camping", "name": "車宿與戶外露營", "icon": "fa-campground" },
  { "id": "charging", "name": "充電轉接與擴充", "icon": "fa-charging-station" },
  { "id": "storage", "name": "收納與車廂整理", "icon": "fa-boxes" }
];

export const LOCATIONS = [
  { "id": "front_trunk", "name": "前備箱" },
  { "id": "center_console", "name": "中控扶手區" },
  { "id": "screen", "name": "中控大螢幕" },
  { "id": "rear_seats", "name": "後座/冷氣出風口" },
  { "id": "rear_trunk", "name": "後備箱/下層收納" },
  { "id": "exterior", "name": "全車外觀/車輪" }
];
`;

  const content = `${header}
export const ACCESSORIES = ${JSON.stringify(accessories, null, 2)};

export const BUNDLES = ${JSON.stringify(bundles, null, 2)};

export const INITIAL_CHECKLIST = [
  { "id": "jowua-001", "required": true, "note": "腳踏墊是車內防護第一要務，提車當天直接鋪上！" },
  { "id": "jowua-004", "required": true, "note": "特斯拉中控太深太空，極度需要分層收納。" },
  { "id": "jowua-009", "required": true, "note": "台灣夏天天窗極燙，強烈建議交車前備好遮陽簾。" },
  { "id": "jowua-013", "required": true, "note": "原廠USB隨身碟高溫易損壞，建議更換為車規級 SSD。" },
  { "id": "quack-001", "required": false, "note": "若介意螢幕看導航反光，可考慮預約呱樂安裝旋轉支架。" },
  { "id": "jowua-020", "required": false, "note": "若經常使用公有停車場慢充，建議備妥 Type 2 轉接頭。" }
];
`;

  fs.writeFileSync(DATA_JS_PATH, content, 'utf8');
  console.log(`[syncDataJs] Successfully updated js/data.js with ${accessories.length} accessories and ${bundles.length} bundles.`);
}
