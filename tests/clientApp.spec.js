const { test, expect } = require('@playwright/test');



test('@Web Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await productName.nth(i).locator("text = Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div h3").waitFor();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    await page.pause();
    expect(bool).toBeFalsy();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    //await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });

});