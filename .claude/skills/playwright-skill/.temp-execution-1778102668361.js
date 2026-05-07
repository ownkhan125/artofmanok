
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

const requests = [];
page.on('response', (r) => {
  const url = r.url();
  if (/classic-desktop|classic-mobile/.test(url)) {
    requests.push({ url: url.slice(0, 120), status: r.status() });
  }
});

await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2000);

// Find the visible classic banner image (the one that's actually rendered, not display:none)
const visible = await page.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll('main img'));
  return imgs
    .filter((img) => {
      const r = img.getBoundingClientRect();
      const cs = getComputedStyle(img);
      return r.width > 0 && r.height > 0 && cs.display !== 'none';
    })
    .filter((img) => /classic-desktop|classic-mobile/.test(img.currentSrc || img.src))
    .map((img) => {
      const r = img.getBoundingClientRect();
      return {
        src: (img.currentSrc || img.src).slice(0, 120),
        natW: img.naturalWidth,
        natH: img.naturalHeight,
        rendW: Math.round(r.width),
        rendH: Math.round(r.height),
        topAbsolute: Math.round(r.top + window.scrollY),
        complete: img.complete,
      };
    });
});
console.log('Visible classic images:', JSON.stringify(visible, null, 2));
console.log('Network requests:', JSON.stringify(requests, null, 2));

if (visible.length > 0) {
  const target = visible[0];
  await page.evaluate((y) => window.scrollTo(0, y - 100), target.topAbsolute);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: '/tmp/aom-classic-banner-rendered.png',
    fullPage: false,
  });
  console.log('📸 captured /tmp/aom-classic-banner-rendered.png');
}

await browser.close();

  } catch (error) {
    console.error('❌ Automation error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
})();
