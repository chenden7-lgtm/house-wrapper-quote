/**
 * Advanced Search & Synonym Engine
 * Handles full-width/half-width normalization, synonym expansion, and multi-keyword fuzzy matching.
 */

const SYNONYM_MAP = {
  // Vehicle Models
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
  'ms': ['ms', 'models', 'model s'],
  'model s': ['ms', 'models', 'model s'],
  'mx': ['mx', 'modelx', 'model x'],
  'model x': ['mx', 'modelx', 'model x'],

  // Accessories & Terminology
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

/**
 * Normalizes full-width characters to half-width and converts to lowercase.
 */
export function normalizeText(text) {
  if (!text) return '';
  return text
    .replace(/[\uFF01-\uFF5E]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
    .replace(/[\u3000]/g, ' ')
    .toLowerCase()
    .trim();
}

/**
 * Expands query term using synonyms dictionary.
 */
export function expandSynonyms(term) {
  const normTerm = normalizeText(term);
  if (!normTerm) return [];

  const synonyms = new Set([normTerm]);

  for (const [key, list] of Object.entries(SYNONYM_MAP)) {
    if (list.includes(normTerm) || key === normTerm) {
      list.forEach(item => synonyms.add(normalizeText(item)));
    }
  }

  return Array.from(synonyms);
}

/**
 * Evaluates whether an item matches all keywords in the search query.
 */
export function matchItem(item, searchQuery) {
  if (!searchQuery) return true;

  const normQuery = normalizeText(searchQuery);
  const keywords = normQuery.split(/\s+/).filter(Boolean);

  if (keywords.length === 0) return true;

  // Build searchable index text from item fields
  const searchableText = normalizeText([
    item.name,
    item.brand,
    item.source,
    item.category,
    item.shortDescription,
    item.fullDescription,
    (item.fitment || []).join(' '),
    (item.variants || []).map(v => v.name + ' ' + v.sku).join(' ')
  ].join(' '));

  // Each keyword (or any of its synonyms) must match searchableText
  return keywords.every(kw => {
    const expansions = expandSynonyms(kw);
    return expansions.some(syn => searchableText.includes(syn));
  });
}
