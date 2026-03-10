const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

// Ensure Excel data exists; if not, generate it
test.beforeAll(() => {
  const jsonPath = path.join(__dirname, '..', 'data', 'login-data.json');
  if (!fs.existsSync(jsonPath)) {
    // generate using the included script
    require('../utils/generate-xlsx');
  }
});

const jsonPath = path.join(__dirname, '..', 'data', 'login-data.json');
const rows = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

for (const row of rows) {
  test(`${row.id} - ${row.description}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', String(row.username));
    await page.fill('#password', String(row.password));
    await page.click('#login-button');

    if (String(row.expectedResult).toLowerCase() === 'success') {
      // successful login assertions
      await expect(page).toHaveURL(/.*inventory.html/);
      await expect(page.locator('.title')).toHaveText('Products');
    } else {
      // invalid login assertions - verify exact error text using toHaveText
      const errorLocator = page.locator('[data-test="error"]');
      await expect(errorLocator).toHaveText(String(row.expectedMessage));
    }
  });
}
