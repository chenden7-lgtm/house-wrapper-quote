async function testProductImage(pid) {
  const url = `https://www.quackev.com/products/info.php?id=${pid}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'QuackEV-Jowua-CatalogBot/1.0' } });
  const html = await res.text();

  // Match tmp_P image
  const tmpImgMatch = html.match(/https?:\/\/[^"'\s]+\/store_image\/quackev\/tmp_[^"'\s]+\.(?:webp|jpg|png|jpeg)/i);
  const anyProdImgMatch = html.match(/https?:\/\/[^"'\s]+\/store_image\/quackev\/(?!G17409)[^"'\s]+\.(?:webp|jpg|png|jpeg)/i);

  const img = tmpImgMatch ? tmpImgMatch[0] : (anyProdImgMatch ? anyProdImgMatch[0] : '');
  console.log(`ID ${pid} => Product Image: ${img}`);
}

async function run() {
  const pids = ['127954', '124571', '97760', '96391', '96111', '55607'];
  for (const pid of pids) {
    await testProductImage(pid);
  }
}

run();
