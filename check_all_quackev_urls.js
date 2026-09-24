const fs = require('fs');

const dataJsPath = '/Users/lauren/.gemini/antigravity-ide/scratch/tesla-accessories-app/js/data.js';
const dataJs = fs.readFileSync(dataJsPath, 'utf8');

const tempFile = '/Users/lauren/.gemini/antigravity-ide/scratch/tesla-accessories-app/temp_quack_urls.js';
fs.writeFileSync(tempFile, dataJs.replace(/export const /g, 'exports.'));
const { ACCESSORIES, BUNDLES } = require(tempFile);

const quackAccessories = ACCESSORIES.filter(a => a.storeId === 'quackev');
const quackBundles = BUNDLES.filter(b => b.storeId === 'quackev');

console.log(`Total QuackEV ACCESSORIES: ${quackAccessories.length}`);
console.log(`Total QuackEV BUNDLES: ${quackBundles.length}`);

console.log('\n--- QUACKEV ACCESSORIES URLS ---');
quackAccessories.forEach((a, i) => {
  console.log(`${i + 1}. [${a.id}] ${a.name} -> officialUrl: ${a.officialUrl || 'MISSING'}`);
});

console.log('\n--- QUACKEV BUNDLES URLS ---');
quackBundles.forEach((b, i) => {
  console.log(`${i + 1}. [${b.id}] ${b.name} -> officialUrl: ${b.officialUrl || 'MISSING'}`);
});

fs.unlinkSync(tempFile);
