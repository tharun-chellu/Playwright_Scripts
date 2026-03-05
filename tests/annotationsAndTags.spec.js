import { test, expect } from '@playwright/test'

test('anotiations test', async ({ page }) => {

});

test('not yet ready', async ({ page }) => {
    test.fail();
});

test.fixme('test to be fixed', async ({ page }) => {
});

test('slow test', async ({ page }) => {
    test.slow();
});

// test.only('focus this test', async ({ page }) => {
//     // Run only focused tests in the entire project
// });


test.describe('chromium only', () => {
    test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

    test.beforeAll(async () => {
        // This hook is only run in Chromium.
    });

    test('test 1', async ({ page }) => {
        // This test is only run in Chromium.
    });

    test('test 2', async ({ page }) => {
        // This test is only run in Chromium.
    });
});


// tags
test('Test full report @smoke', async ({ page }) => {
    // ...
});