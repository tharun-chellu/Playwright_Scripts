// npm init playwright
// tests -> test cases creation , node modules -> jars.

const { test, expect } = require('@playwright/test');

// test('playwright basics', async ({ page }) => {
//     await page.goto("https://www.google.com");
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Google");

// });

/*   locators :
 ID -> tag name #id
Class -> tag name, .class
Attribute -> [attribute='value'] or [attribute*]
parent to child -> (css-> parent tagname >> child tagname)
loactors based on text -> text =""
*/

test.only(' browser context validation', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css selectors
    await userName.fill("rahulshettyacademy=");
    await page.locator('[type="password"]').fill("Learning@830$3mK2");
    await page.locator('[type="checkbox"]').click();
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    // gessosaquoca-2570@yopmail.com
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    // await page.waitForLoadState("networkidle"); (Falcy test)
    // console.log(await cardTitles.nth(1).textContent());
    // console.log(await cardTitles.first().textContent());
    await page.locator(".card-body a").first().waitFor();
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});