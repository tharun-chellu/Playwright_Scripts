import { test, expect } from '@playwright/test'

test('test selector', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    //using any obj property
    await page.click('id=user-name') // or await page.locator('id=user-name').click
    await page.locator('id=user-name').fill('Chellu')
    await page.locator('[id="user-name"]').fill('kumar')

    // css selector 
    // #login-button
    await page.locator('#login-button').click()

    // using x-path
    await page.locator('xpath=//*[@id="password"]').fill('tharun')
    await page.locator('//*[@id="password"]').fill('hi')

    // using text
    await page.locator('text=LOGIN').click()
    await page.pause();
    await page.locator('input:has-text("LOGIN")').click()

    await page.pause();
});