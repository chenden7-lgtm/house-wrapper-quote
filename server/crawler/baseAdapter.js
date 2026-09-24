/**
 * Base Crawler Adapter
 * Handles HTTP requests, rate limiting, retry logic (3x), and standardized failure logging.
 */

export class BaseAdapter {
  constructor(name, baseUrl) {
    this.name = name;
    this.baseUrl = baseUrl;
    this.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 QuackEV-Jowua-CatalogBot/1.0';
    this.requestDelayMs = 200;
  }

  async delay(ms = this.requestDelayMs) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Fetches URL with auto-retry up to maxRetries (default 3 times).
   */
  async fetchWithRetry(url, options = {}, maxRetries = 3, retryDelay = 1000) {
    let lastError = null;
    const headers = {
      'User-Agent': this.userAgent,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
      ...(options.headers || {})
    };

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        await this.delay();
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
        }
        return response;
      } catch (err) {
        lastError = err;
        console.warn(`[${this.name}] Attempt ${attempt}/${maxRetries} failed for ${url}: ${err.message}`);
        if (attempt < maxRetries) {
          await this.delay(retryDelay * attempt);
        }
      }
    }
    throw new Error(`[${this.name}] Failed after ${maxRetries} attempts. Cause: ${lastError ? lastError.message : 'Unknown'}`);
  }

  /**
   * Fetches text content from URL.
   */
  async fetchText(url, options = {}) {
    const res = await this.fetchWithRetry(url, options);
    return await res.text();
  }

  /**
   * Fetches JSON content from URL.
   */
  async fetchJson(url, options = {}) {
    const res = await this.fetchWithRetry(url, options);
    return await res.json();
  }
}
