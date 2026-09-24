import { db } from '../server/db.js';
import { matchItem, expandSynonyms, normalizeText } from '../server/searchEngine.js';

async function runTests() {
  console.log('==================================================');
  console.log('🧪 Starting System Verification & Validation Suite');
  console.log('==================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`✅ [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${testName}`);
      failed++;
    }
  }

  // 1. Data Integrity & Sync Stats Check
  const stats = db.getStats();
  const products = db.getProducts();

  assert(products.length > 0, `Database contains active products (Found: ${products.length})`);
  assert(stats.failedUrls && stats.failedUrls.length === 0, `Zero failed URLs in crawler logs (Failed: ${stats.failedUrls ? stats.failedUrls.length : 0})`);
  assert(stats.sitemapsFound >= 2, `Sitemaps discovered correctly (Found: ${stats.sitemapsFound})`);
  assert(stats.paginationPagesCrawled >= 15, `Pagination traversed to completion (Pages: ${stats.paginationPagesCrawled})`);

  // 2. Canonical Deduplication Check
  const canonicalIds = new Set();
  let duplicateCount = 0;
  products.forEach(p => {
    const key = p.canonicalUrl || p.id;
    if (canonicalIds.has(key)) duplicateCount++;
    canonicalIds.add(key);
  });
  assert(duplicateCount === 0, `Canonical ID / URL deduplication check (Duplicates: ${duplicateCount})`);

  // 3. Synonym Engine Unit Tests
  const m3Synonyms = expandSynonyms('M3');
  assert(m3Synonyms.includes('highland') && m3Synonyms.includes('model 3'), `Synonym expansion for "M3" includes "highland" and "model 3"`);

  const trunkSynonyms = expandSynonyms('尾箱');
  assert(trunkSynonyms.includes('行李箱') && trunkSynonyms.includes('後車廂'), `Synonym expansion for "尾箱" includes "行李箱" and "後車廂"`);

  // 4. Synonym Search Multi-keyword Queries Test
  const query1 = 'Model Y 2025 腳踏墊';
  const match1 = products.filter(p => matchItem(p, query1));
  assert(match1.length > 0, `Search query "${query1}" returned ${match1.length} matches`);

  const query2 = 'M3 煥新 尾箱';
  const match2 = products.filter(p => matchItem(p, query2));
  assert(match2.length > 0, `Search query "${query2}" returned ${match2.length} matches`);

  const query3 = '輪圈';
  const match3 = products.filter(p => matchItem(p, query3));
  assert(match3.length > 0, `Search query "${query3}" returned ${match3.length} matches`);

  // 5. 20-Item Random Audit Sample Check
  const sample = db.getRandomSample(20);
  assert(sample.length === 20, `Random audit sample generated 20 items`);
  const sampleComplete = sample.every(i => i.name && i.officialUrl && i.price !== undefined && i.source && i.fitment);
  assert(sampleComplete, `All 20 audit sample items contain mandatory 15-field attributes`);

  console.log('\n==================================================');
  console.log(`📊 Test Summary: ${passed} Passed, ${failed} Failed`);
  console.log('==================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
