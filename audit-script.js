const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// Screenshot directory
const screenshotDir = path.join(__dirname, 'audit-screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// Pages to test
const pages = [
  { url: 'http://localhost:1313/', name: 'homepage' },
  { url: 'http://localhost:1313/essays/', name: 'essays' },
  { url: 'http://localhost:1313/research/', name: 'research' },
  { url: 'http://localhost:1313/cognitive-tools/', name: 'cognitive-tools' },
  { url: 'http://localhost:1313/cognitive-tools/active-recall/', name: 'active-recall' },
  { url: 'http://localhost:1313/about/', name: 'about' }
];

// Viewports
const viewports = {
  desktop: { width: 1280, height: 720 },
  mobile: { width: 375, height: 667 }
};

async function runAudit() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const results = [];
  const consoleErrors = [];
  
  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({
        page: page.url(),
        type: msg.type(),
        text: msg.text()
      });
    }
  });
  
  // Capture page errors
  page.on('pageerror', error => {
    consoleErrors.push({
      page: page.url(),
      type: 'pageerror',
      text: error.message
    });
  });

  for (const pageConfig of pages) {
    console.log(`\n=== Testing ${pageConfig.name} ===`);
    
    // Test desktop viewport
    await page.setViewportSize(viewports.desktop);
    await page.goto(pageConfig.url, { waitUntil: 'networkidle' });
    
    const desktopScreenshot = path.join(screenshotDir, `${pageConfig.name}-desktop.png`);
    await page.screenshot({ path: desktopScreenshot, fullPage: true });
    console.log(`  Desktop screenshot: ${desktopScreenshot}`);
    
    // Test theme toggle on homepage
    if (pageConfig.name === 'homepage') {
      console.log('  Testing theme toggle...');
      
      // Try to find theme toggle button
      const themeToggle = await page.locator('[data-theme-toggle], .theme-toggle, button[aria-label*="theme"], button[title*="theme"]').first();
      
      if (await themeToggle.count() > 0) {
        console.log('  Theme toggle found');
        
        // Click to toggle to dark
        await themeToggle.click();
        await page.waitForTimeout(500);
        
        const darkScreenshot = path.join(screenshotDir, `${pageConfig.name}-desktop-dark.png`);
        await page.screenshot({ path: darkScreenshot, fullPage: true });
        console.log(`  Dark mode screenshot: ${darkScreenshot}`);
        
        // Click to toggle back to light
        await themeToggle.click();
        await page.waitForTimeout(500);
      } else {
        console.log('  Warning: Theme toggle not found');
      }
    }
    
    // Test mobile viewport for specific pages
    if (['homepage', 'cognitive-tools'].includes(pageConfig.name)) {
      await page.setViewportSize(viewports.mobile);
      await page.reload({ waitUntil: 'networkidle' });
      
      const mobileScreenshot = path.join(screenshotDir, `${pageConfig.name}-mobile.png`);
      await page.screenshot({ path: mobileScreenshot, fullPage: true });
      console.log(`  Mobile screenshot: ${mobileScreenshot}`);
    }
    
    results.push({
      page: pageConfig.name,
      url: pageConfig.url,
      status: 'completed'
    });
  }
  
  await browser.close();
  
  // Output results
  console.log('\n=== AUDIT COMPLETE ===');
  console.log('\nScreenshots captured:');
  results.forEach(r => console.log(`  ✓ ${r.page}`));
  
  if (consoleErrors.length > 0) {
    console.log('\n=== CONSOLE ERRORS ===');
    consoleErrors.forEach(err => {
      console.log(`  [${err.type}] ${err.page}: ${err.text}`);
    });
  } else {
    console.log('\n✓ No console errors detected');
  }
  
  return { results, consoleErrors };
}

runAudit().catch(console.error);
