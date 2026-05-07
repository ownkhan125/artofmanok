
const { chromium, firefox, webkit, devices } = require('playwright');
const helpers = require('./lib/helpers');

// Extra headers from environment variables (if configured)
const __extraHeaders = helpers.getExtraHeadersFromEnv();

/**
 * Utility to merge environment headers into context options.
 * Use when creating contexts with raw Playwright API instead of helpers.createContext().
 * @param {Object} options - Context options
 * @returns {Object} Options with extraHTTPHeaders merged in
 */
function getContextOptionsWithHeaders(options = {}) {
  if (!__extraHeaders) return options;
  return {
    ...options,
    extraHTTPHeaders: {
      ...__extraHeaders,
      ...(options.extraHTTPHeaders || {})
    }
  };
}

(async () => {
  try {
    
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const errs = [];
page.on('console', m => { if (m.type()==='error') errs.push(m.text().slice(0,200)); });
page.on('pageerror', e => errs.push('PAGEERROR: ' + e.message.slice(0,200)));
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.evaluate(() => new Promise(r => { let t=0; const id=setInterval(()=>{window.scrollBy(0,200);t+=200;if(t>document.body.scrollHeight+400){clearInterval(id);r();}},50); }));
await page.waitForTimeout(2000);
console.log('console errors:', errs.length === 0 ? 'NONE ✓' : errs.join('\n'));
const swipers = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('.swiper')).map(s => ({
    autoplay: !!s.swiper?.autoplay?.running,
    paused: s.swiper?.autoplay?.paused,
    slides: s.swiper?.slides?.length,
  }));
});
console.log('swipers found:', JSON.stringify(swipers, null, 2));
await browser.close();

  } catch (error) {
    console.error('❌ Automation error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
})();
