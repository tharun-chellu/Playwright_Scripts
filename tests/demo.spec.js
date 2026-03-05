
// const { test, expect } = require('@playwright/test')

// test('My first test', async ({ page }) => {
//     await page.goto('https://google.com')
//     await expect(page).toHaveTitle('Google')
//     await page.close()
//     await page.pause()
// });

import { test, expect } from '@playwright/latest'

test('google website', async ({ page }) => {
    await page.goto('www.google.com');
});

