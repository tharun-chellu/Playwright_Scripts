import { test, expect } from '@playwright/test'

test('assertions_test', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    //present or not present
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/h1')).toHaveCount(1)
    if (await page.$('//*[@id="__next"]/div/div/section/div/h1')) {
        await page.locator('//*[@id="__next"]/div/div/section/div/h1').click();
    }

    // check element visible or not
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/h1')).toBeVisible()
    // soft assrtions will run remaiing assertion even it was failed 
    // await expect.soft(page.locator('//*[@id="__next"]/div/div/section/div/h1')).toBeHidden()

    // check enabled or disabled
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/h1')).toBeEnabled()
    // await expect.soft(page.locator('//*[@id="__next"]/div/div/section/div/h1')).toBeDisabled()

    // check the text
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/div/a[10]/h3')).toHaveText('Select')
    //await expect(page.locator('//*[@id="__next"]/div/div/section/div/div/a[10]/h3')).not.toHaveText('1234')

    // check attribute value
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/div/a[10]/h3')).toHaveAttribute('class', /.*css-zey6tx/)
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/div/a[10]/h3')).toHaveClass(/.*css-zey6tx/)


    //check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*The Kitchen/)

    //visual validation screenshot
    await expect(page).toHaveScreenshot()
    await page.pause()
})