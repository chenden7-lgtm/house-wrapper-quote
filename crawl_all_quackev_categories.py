import urllib.request
import re
import json
import time

gids = ['1691', '1692', '1693', '1694', '1697', '2066', '2067', '2068', '2834', '2835', '2956', '2957', '3182', '4918', '9126', '9287', '9589']

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

all_product_ids = set()

print(f"Starting crawl of QuackEV across {len(gids)} category GIDs...")

for gid in gids:
    url = f"https://www.quackev.com/products/index.php?gid={gid}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            ids = re.findall(r'info\.php\?id=(\d+)', html)
            for pid in ids:
                all_product_ids.add(pid)
            print(f"GID {gid}: found {len(ids)} item links (Total unique product IDs so far: {len(all_product_ids)})")
    except Exception as e:
        print(f"Error GID {gid}: {e}")

print(f"\nCompleted category scan! Total unique QuackEV products discovered: {len(all_product_ids)}")

crawled_products = []

for idx, pid in enumerate(sorted(list(all_product_ids)), 1):
    detail_url = f"https://www.quackev.com/products/info.php?id={pid}"
    try:
        req = urllib.request.Request(detail_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # Title
            title_match = re.search(r'<title>(.*?)</title>', html, re.DOTALL)
            raw_title = title_match.group(1).strip() if title_match else ""
            title = raw_title.split('-')[0].strip() if '-' in raw_title else raw_title
            
            # Price
            price_match = re.search(r'[\$|\$ ]\s*([\d,]+)', html)
            price = int(price_match.group(1).replace(',', '')) if price_match else 0
            
            # Image
            img_match = re.search(r'src=["\'](https://www\.workband\.com\.tw/store_image/quackev/[^"\']+)["\']', html)
            img = img_match.group(1) if img_match else ""
            if not img:
                img_fallback = re.search(r'src=["\']([^"\']*(?:upload|tmp|store_image)[^"\']*)["\']', html)
                if img_fallback:
                    img = img_fallback.group(1)
                    if not img.startswith('http'):
                        img = 'https://www.quackev.com/products/' + img.lstrip('./')

            # Description snippet
            clean_text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
            clean_text = re.sub(r'<style[^>]*>.*?</style>', '', clean_text, flags=re.DOTALL)
            clean_text = re.sub(r'<[^>]+>', ' ', clean_text)
            clean_text = ' '.join(clean_text.split())

            crawled_products.append({
                'id': str(pid),
                'url': detail_url,
                'title': title,
                'price': price,
                'image': img,
                'raw_text': clean_text[:600]
            })
            print(f"[{idx}/{len(all_product_ids)}] Fetched ID {pid}: {title} (NT$ {price})")
    except Exception as e:
        print(f"[{idx}/{len(all_product_ids)}] Error ID {pid}: {e}")

with open('quackev_all_crawled_products.json', 'w', encoding='utf-8') as f:
    json.dump(crawled_products, f, ensure_ascii=False, indent=2)

print("\nSuccessfully saved quackev_all_crawled_products.json!")
