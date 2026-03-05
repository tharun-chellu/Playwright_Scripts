import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/')
    await page.pause()
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.waitForURL('https://www.saucedemo.com/v1/inventory.html')
})

test.afterAll(async ({ page }) => {
    await page.close()
})

test('adding_cart', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();

})

test('logout', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForURL('https://www.saucedemo.com/v1/index.html')
})