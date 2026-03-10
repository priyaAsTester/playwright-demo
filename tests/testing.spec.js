const{test,expect}=require('@playwright/test')

test("test",async({page})=>{

await page.goto("https://myrecruit.qacri.com/onboarding/addressproof-details/eyJpdiI6Iis3Szhhb1YwMEdkRU1YSmZmTzVJY3c9PSIsInZhbHVlIjoiSm5ML2srTkFBQVpZR1UxODdRN1N4Zz09IiwibWFjIjoiYjJhM2Q1Njc2NTJkZTk1YTRiODA3NGI1YzcyN2E3MzEyOGRiMjE4YWZjZmFkYzBkZDUyMjA2ZmQyOTRhN2UxYyIsInRhZyI6IiJ9n")
await page.locator('(//span[@class="ant-steps-icon"])[3]').click();
await page.getByRole('textbox', { name: 'PAN Number*' }).click();
await page.getByRole('textbox', { name: 'PAN Number*' }).fill('JHDGT6787b');
//await page.getByText('Click to upload or drag and').first().click();
//await page.locator('//input[id="file-upload-pan_proof"]').setInputFiles("fixtures\\screenshot.png");
const panUploadInput = page.locator('#file-upload-pan_proof');

// wait until input exists in DOM
await panUploadInput.waitFor({ state: 'attached' });

// upload (force because AntD hides it)
await panUploadInput.setInputFiles(
  "fixtures/screenshot.png",
  { force: true }
);


});