import { test, expect, chromium } from '@playwright/test'

test('slowmotion_test', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false

    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 }
        }
    });

    const page = await context.newPage();

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('//*[@id="username"]').fill('chellu');
    await page.locator('//*[@id="password"]').fill("tharun@1234");
    await page.click('text = Sign in');
    await page.locator('text = ACME').isVisible();
    // /html/body/div/div[1]/div[1]/a/div[2]

    await page.pause()

    await context.close();
})