// const { test, expect } = require('@playwright/test');


// test('test in incognito mode', async ({page }) => {
//   // const context = await browser.newContext(); // Creates a new incognito context
//   // const page = await context.newPage();
//   const userName = page.locator("#username");
//   const password = page.locator("#password");
//   const signIn = page.locator("#signOnButton");
//   await page.goto('https://practicetestautomation.com/practice-test-login/');
//   await page.waitForLoadState('networkidle');
//   await userName.fill("student");
//   await password.fill("Password123");
//   await page.waitForLoadState('networkidle');
//   await page.getByRole('link', { name: 'Logged In Successfully' }).click();
// });


const { test, expect } = require('@playwright/test');

test('test in incognito mode', async ({ browser }) => {
  // Step 1: Create a new incognito context and page
  const context = await browser.newContext(); // Incognito context
  const page = await context.newPage();

  // Step 2: Define locators
  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signIn = page.locator("#signOnButton");

  // Step 3: Navigate to the page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.waitForLoadState('networkidle'); // Wait for the network to settle

  // Step 4: Perform login actions
  await userName.fill("student");
  await password.fill("Password123");
  await signIn.click();

  // Step 5: Verify successful login
  const successMessage = page.getByRole('heading', { name: 'Logged In Successfully' });
  await expect(successMessage).toBeVisible();

  // Close the incognito context
  await context.close();
});