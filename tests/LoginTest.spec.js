const { test, expect } = require('@playwright/test');
const XLSX = require("xlsx");
const path = require("path");

test("Verifying Login Page", async ({ page }) => {
  await page.goto("https://auth.qacri.com/login");
  await expect(page).toHaveURL(/login/);
});

test("Verifying Home page", async ({ page }) => {



  // Excel path (Excel is inside utils folder)
  const filePath = path.join(__dirname, "..", "utils", "testdata.xlsx");

  console.log("Current file directory:", __dirname);
  console.log("Resolved Excel path:", filePath);

  // Read Excel
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets["Login"];
  const data = XLSX.utils.sheet_to_json(sheet);

  for (let i=0;i<data.length;i++){
  const username = data[i].username;
  const password = data[i].password;

  // Login flow
    await page.goto("https://auth.qacri.com/login");
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill(username);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Logout flow
  await page.getByRole('link', { name: 'Access' }).first().click();
  await page.locator("span[id*='5ulbH1_']").first().click();
 //await page.getByRole('img', { name: 'Logout' }).click();
  await page.locator('(//button[@type="button"])[1]').click();
  //await page.locator('//img[@alt="User Profile"]').click();

 // await expect(page.locator('body'))
 //   .toContainText('You are successfully logged out!');
  }
});

