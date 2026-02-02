import { test, expect } from '@playwright/test';

const pages = [
    { url: '/', name: 'homepage' },
    { url: '/essays/', name: 'essays' },
    { url: '/research/', name: 'research' },
    { url: '/cognitive-tools/', name: 'cognitive-tools' },
    { url: '/cognitive-tools/active-recall/', name: 'active-recall' },
    { url: '/about/', name: 'about' }
];

test.describe('Site Audit', () => {
    for (const pageConfig of pages) {
        test(`Verify ${pageConfig.name} loads correctly`, async ({ page }) => {
            const consoleErrors: string[] = [];
            page.on('console', msg => {
                if (msg.type() === 'error') consoleErrors.push(msg.text());
            });
            page.on('pageerror', error => {
                consoleErrors.push(error.message);
            });

            await page.goto(pageConfig.url);
            await expect(page).not.toHaveTitle(/404/);

            // Wait for network idle to ensure everything is loaded
            await page.waitForLoadState('networkidle');

            expect(consoleErrors).toHaveLength(0);
        });
    }

    test('Theme toggle should work on homepage', async ({ page }) => {
        await page.goto('/');

        // Check if theme toggle exists
        const themeToggle = page.locator('[data-theme-toggle], .theme-toggle, button[aria-label*="theme"], button[title*="theme"]').first();

        if (await themeToggle.count() > 0) {
            // Toggle theme
            await themeToggle.click();
            // Add a small delay for transition
            await page.waitForTimeout(500);

            // Take a screenshot of dark mode
            await page.screenshot({ path: 'test-results/homepage-dark.png', fullPage: true });

            // Toggle back
            await themeToggle.click();
            await page.waitForTimeout(500);
        } else {
            test.skip(true, 'Theme toggle not found');
        }
    });

    test('Critical pages should be responsive', async ({ page, isMobile }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const screenshotName = isMobile ? 'homepage-mobile.png' : 'homepage-desktop.png';
        await page.screenshot({ path: `test-results/${screenshotName}`, fullPage: true });

        await page.goto('/cognitive-tools/');
        await page.waitForLoadState('networkidle');

        const toolsScreenshotName = isMobile ? 'cognitive-tools-mobile.png' : 'cognitive-tools-desktop.png';
        await page.screenshot({ path: `test-results/${toolsScreenshotName}`, fullPage: true });
    });
});
