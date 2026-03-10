const { test, expect } = require('@playwright/test');

const credentials = [
  { username: 'standard_user', password: 'secret_sauce', shouldLogin: true },
  { username: 'locked_out_user', password: 'secret_sauce', shouldLogin: false },
  { username: 'problem_user', password: 'secret_sauce', shouldLogin: true },
  { username: 'performance_glitch_user', password: 'secret_sauce', shouldLogin: true },
];

for (const cred of credentials) {
  test(`SauceDemo login - ${cred.username}`, async ({ page }) => {
    // Navigate to Sauce Demo
    await page.goto('https://www.saucedemo.com');

    // Fill credentials and submit
    await page.fill('#user-name', cred.username);
    await page.fill('#password', cred.password);
    await page.click('#login-button');

    if (cred.shouldLogin) {
      // Expect to land on inventory page
      await expect(page).toHaveURL(/inventory.html/);
      // Logout to reset state for next test (if menu available)
      const menu = page.locator('#react-burger-menu-btn');
      if (await menu.count()) {
        await menu.click();
        const logout = page.locator('#logout_sidebar_link');
        if (await logout.count()) await logout.click();
      }
    } else {
      // Expect error message for locked out user
      const err = page.locator('[data-test="error"]');
      await expect(err).toBeVisible();
    }
  });
}
