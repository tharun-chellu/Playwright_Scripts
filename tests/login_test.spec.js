import { test, expect } from '@playwright/test'

test('login_demo', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('//*[@id="username"]').fill('chellu');
    await page.locator('//*[@id="password"]').fill("tharun@1234");
    await page.click('text = Sign in');
    await page.locator('text = ACME').isVisible();
    // /html/body/div/div[1]/div[1]/a/div[2]

    await page.pause()

    //await page.waitForSelector('text = Sign in', {timeout : 4000})
    //await expect(page.locator('text = Sign in')).to HaveCount(1)

})

test.only('new_demo', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').press('ControlOrMeta+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('Control+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.pause();

})