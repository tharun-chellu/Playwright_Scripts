const { test, expect } = require('@playwright/test');


test('test in incognito mode', async ({ page }) => {
  // const context = await browser.newContext(); // Creates a new incognito context
  // const page = await context.newPage();
  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signIn = page.locator("#signOnButton");
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.waitForLoadState('networkidle');
  await userName.fill("student");
  await password.fill("Password123");
  await signIn.click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Logged In Successfully' }).click();
})