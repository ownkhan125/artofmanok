const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const widths = [375, 500, 649, 768, 900, 1024, 1440]
  const out = path.join(require('os').tmpdir(), 'footer-check')
  if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true })
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 1000 } })
    const page = await ctx.newPage()
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(800)
    const footer = page.locator('footer').first()
    const fp = path.join(out, 'footer-w' + w + '.png')
    await footer.screenshot({ path: fp })
    console.log('shot', w, '→', fp)
    await ctx.close()
  }
  await browser.close()
})()
