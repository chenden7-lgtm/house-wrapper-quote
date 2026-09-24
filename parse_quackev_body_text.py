import urllib.request, re

pids = [94851, 94850, 94845, 52489, 20647, 18845, 7590, 7576, 7529, 7527, 45838]
headers = {'User-Agent': 'Mozilla/5.0'}

for pid in pids:
    url = f"https://www.quackev.com/products/info.php?id={pid}"
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        
        # Remove script and style tags
        html_clean = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
        html_clean = re.sub(r'<style[^>]*>.*?</style>', '', html_clean, flags=re.DOTALL)
        
        # Strip all tags
        text = re.sub(r'<[^>]+>', ' ', html_clean)
        text = ' '.join(text.split())
        
        # Find product specification / title snippet
        print(f"\n==================== ID {pid} ====================")
        print(text[text.find('HALOBLK'):text.find('HALOBLK')+350])
    except Exception as e:
        print(f"Error {pid}: {e}")

