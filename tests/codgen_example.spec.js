// import { test, expect } from '@playwright/test';

// test('test codgen', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/v1/');
//     await page.getByText('Accepted usernames are: standard_user locked_out_user problem_user').dblclick();
//     await page.locator('[data-test="username"]').dblclick();
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.getByRole('button', { name: 'LOGIN' }).click();
//     await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
//     await page.getByRole('button', { name: 'Open Menu' }).click();
//     await page.getByRole('link', { name: 'Logout' }).click();
// });


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('button', { name: '<- Back' }).click();
    // await page.pause();
    await page.getByText('Sauce Labs Bolt T-ShirtGet').click();
    await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('button', { name: '<- Back' }).click();
    // await page.pause();
    await page.getByRole('link', { name: '2' }).click();
    await page.getByRole('link', { name: 'CHECKOUTss' }).click(); //trace viewer
    await page.locator('#header_container div').first().click();
    await page.goto('https://www.saucedemo.com/v1/index.html12334');
});