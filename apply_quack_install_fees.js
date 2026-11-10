import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORE_PATH = path.join(__dirname, 'server', 'data', 'store.json');
const FEES_PATH = path.join(__dirname, 'quack_install_fees_result.json');

const store = JSON.parse(fs.readFileSync(STORE_PATH, 'utf8'));
const fees = JSON.parse(fs.readFileSync(FEES_PATH, 'utf8'));
const feeMap = new Map(fees.map(f => [f.id, f]));

let updatedCount = 0;
let feeAboveZeroCount = 0;
let feeZeroCount = 0;

store.products.forEach(p => {
  if (p.source && !p.source.includes('Jowua')) {
    const feeInfo = feeMap.get(p.id);
    if (feeInfo) {
      const partsPrice = (feeInfo.sitePrice && feeInfo.sitePrice > 0) ? feeInfo.sitePrice : p.price;
      const installFee = feeInfo.installFee || 0;
      const finalPrice = partsPrice + installFee;

      p.partsPrice = partsPrice;
      p.installFee = installFee;
      p.price = finalPrice;
      p.originalPrice = finalPrice;

      if (p.variants && p.variants.length > 0) {
        p.variants.forEach(v => {
          v.partsPrice = partsPrice;
          v.installFee = installFee;
          v.price = finalPrice;
        });
      }

      updatedCount++;
      if (installFee > 0) {
        feeAboveZeroCount++;
      } else {
        feeZeroCount++;
      }
    }
  }
});

fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), 'utf8');
console.log(`[apply_quack_install_fees] Successfully updated ${updatedCount} QuackEV products in store.json!`);
console.log(`[apply_quack_install_fees] - ${feeAboveZeroCount} items with installFee > 0 added to price.`);
console.log(`[apply_quack_install_fees] - ${feeZeroCount} items with installFee === 0 (already 完工價 / 隨車隨放免工資).`);
