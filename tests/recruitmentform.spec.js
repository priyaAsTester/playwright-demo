import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
 await page.goto("https://myrecruit.qacri.com/onboarding/personal-details/eyJpdiI6Iis3Szhhb1YwMEdkRU1YSmZmTzVJY3c9PSIsInZhbHVlIjoiSm5ML2srTkFBQVpZR1UxODdRN1N4Zz09IiwibWFjIjoiYjJhM2Q1Njc2NTJkZTk1YTRiODA3NGI1YzcyN2E3MzEyOGRiMjE4YWZjZmFkYzBkZDUyMjA2ZmQyOTRhN2UxYyIsInRhZyI6IiJ9")
//   await page.locator('#rc_select_0').click();
//   await page.getByText('Male').nth(2).click();
//   await page.getByRole('textbox', { name: 'Date of Birth*' }).click();
//   await page.getByRole('cell', { name: '29' }).click();
//   await page.locator('#rc_select_1').click();
//   await page.keyboard.press('ArrowDown');
//    await page.keyboard.press('ArrowDown')
//    await page.keyboard.press('Enter');
//   await page.locator('#rc_select_2').click();
//    await page.keyboard.press('ArrowDown')
//    await page.keyboard.press('Enter');
//   await page.locator('#rc_select_3').click();
//   await page.keyboard.press('ArrowDown')
//    await page.keyboard.press('ArrowDown')
//    await page.keyboard.press('Enter');
//   await page.getByRole('textbox', { name: 'Alternative Contact Number*' }).click();
//   await page.getByRole('textbox', { name: 'Alternative Contact Number*' }).fill('9865555655');
//   await page.getByRole('textbox', { name: 'Father\'s Name*' }).click();
//   await page.getByRole('textbox', { name: 'Father\'s Name*' }).fill('guru');
//   await page.getByRole('textbox', { name: 'Mother\'s Name*' }).click();
//   await page.getByRole('textbox', { name: 'Mother\'s Name*' }).fill('meena');
//   await page.getByPlaceholder('Enter name').click();
//   await page.getByPlaceholder('Enter name').fill('harish');
//   await page.locator('#rc_select_4').click();
//    await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//    await page.keyboard.press('Enter');
//   await page.locator('div:nth-child(2) > .grid > div:nth-child(3) > div:nth-child(2)').click();
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).fill('9u88897897');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowLeft');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).press('ArrowRight');
//   await page.getByRole('textbox', { name: 'Emergency Contact*' }).fill('9988897897');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('textbox', { name: 'District*' }).click();
//   await page.getByRole('spinbutton', { name: 'Pincode*' }).click();
//   await page.getByRole('spinbutton', { name: 'Pincode*' }).fill('60012');
//   await page.getByRole('spinbutton', { name: 'Pincode*' }).press('ArrowLeft');
//   await page.getByRole('spinbutton', { name: 'Pincode*' }).fill('600102');
//   await page.locator('#rc_select_7').click();
//  await page.getByText('Adikaratti').click();
//   await page.getByRole('textbox', { name: 'Address*' }).click();
//   await page.getByRole('textbox', { name: 'Address*' }).fill('12,fathima steeet');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.waitForTimeout(2000);
//    await page.locator('(//span[@class="ant-steps-icon"])[2]').click();
//  await page.waitForTimeout(2000);
   await page.locator('(//span[@class="ant-steps-icon"])[3]').click();
//  await page.waitForTimeout(2000);

//   await page.getByRole('textbox', { name: 'PAN Number*' }).click();
//   await page.getByRole('textbox', { name: 'PAN Number*' }).fill('JHDGT6787f');
//  const panUploadInput = page.locator('#file-upload-pan_proof');

// // wait until input exists in DOM
// await panUploadInput.waitFor({ state: 'attached' });

// // upload (force because AntD hides it)
// await panUploadInput.setInputFiles(
//   "fixtures/screenshot.png",
//   { force: true }
// );

 //await page.goto('https://myrecruit.qacri.com/onboarding/addressproof-details/eyJpdiI6IlZFdlhOOGFUVVczRWk3OFNHeUZ6SkE9PSIsInZhbHVlIjoiTklYYUJxeks4NGRYNDYzNWk0Qnh4UT09IiwibWFjIjoiOWZjMjdmNTA3YjRmMGFmYzI0YTY5YmYwZjI0ZTMzN2UxZjEwYmI5YWMzYmQzZGYwNDUzM2U2MDVhMTFlMDViZSIsInRhZyI6IiJ9');
  await page.getByRole('textbox', { name: 'Aadhar Number*' }).click();
  await page.getByRole('textbox', { name: 'Aadhar Number*' }).fill('787634567879');
  const panUploadInput2 = page.locator('#file-upload-aadhar_proof');

// wait until input exists in DOM
await panUploadInput2.waitFor({ state: 'attached' });

// upload (force because AntD hides it)
await panUploadInput2.setInputFiles(
  "fixtures\screenshotaadhar.png",
  { force: true }
);

  await page.goto('https://myrecruit.qacri.com/onboarding/addressproof-details/eyJpdiI6IlZFdlhOOGFUVVczRWk3OFNHeUZ6SkE9PSIsInZhbHVlIjoiTklYYUJxeks4NGRYNDYzNWk0Qnh4UT09IiwibWFjIjoiOWZjMjdmNTA3YjRmMGFmYzI0YTY5YmYwZjI0ZTMzN2UxZjEwYmI5YWMzYmQzZGYwNDUzM2U2MDVhMTFlMDViZSIsInRhZyI6IiJ9');
  await page.getByRole('textbox', { name: 'UAN Number' }).click();
  await page.getByRole('textbox', { name: 'UAN Number' }).fill('100856756675');
const panUploadInput3 = page.locator('file-upload-user_profile');

// wait until input exists in DOM
await panUploadInput3.waitFor({ state: 'attached' });

// upload (force because AntD hides it)
await panUploadInput3.setInputFiles(
  "fixtures\screenshotpp.png",
  { force: true }
)


  //await page.goto('https://myrecruit.qacri.com/onboarding/addressproof-details/eyJpdiI6IlZFdlhOOGFUVVczRWk3OFNHeUZ6SkE9PSIsInZhbHVlIjoiTklYYUJxeks4NGRYNDYzNWk0Qnh4UT09IiwibWFjIjoiOWZjMjdmNTA3YjRmMGFmYzI0YTY5YmYwZjI0ZTMzN2UxZjEwYmI5YWMzYmQzZGYwNDUzM2U2MDVhMTFlMDViZSIsInRhZyI6IiJ9');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('ant-select-selection-overflow').click();
  // await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.locator('div').filter({ hasText: 'Fill out the detailsCourse' }).nth(5).click();
  await page.getByRole('textbox', { name: 'Institution Name*' }).click();
  await page.getByRole('textbox', { name: 'Institution Name*' }).fill('hrms');
  await page.getByRole('textbox', { name: 'Institution Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Board/University*' }).fill('state');
  await page.getByRole('textbox', { name: 'Year of passing*' }).click();
  await page.getByRole('textbox', { name: 'Year of passing*' }).fill('2022');
  await page.getByRole('textbox', { name: 'Percentage*' }).click();
  await page.getByRole('textbox', { name: 'Percentage*' }).fill('78');
  await page.waitForTimeout(3000);
  const panUploadInput4 = page.locator('//input[@type="file"]');
  

// wait until input exists in DOM
await panUploadInput4.waitFor({ state: 'attached' });

// upload (force because AntD hides it)
await panUploadInput4.setInputFiles(
  "fixtures/10thmarksheettesting.jpg",
  { force: true }
);

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter');

  //await page.locator('path').nth(5).click();
  //await page.locator('//input[@type="file")').setInputFiles('fixtures/Testingresume.png');
  const panUploadInput5 = page.locator('#file-upload-resume');

// wait until input exists in DOM
await panUploadInput5.waitFor({ state: 'attached' });

// upload (force because AntD hides it)
await panUploadInput5.setInputFiles(
  "fixtures/Testingresume.png",
  { force: true }
);

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#agree').click();
  await page.locator('canvas').click({
    position: {
      x: 106,
      y: 84
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 161,
      y: 69
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 138,
      y: 87
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 229,
      y: 27
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 170,
      y: 79
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 266,
      y: 35
    }
  });
  await page.locator('canvas').dblclick({
    position: {
      x: 160,
      y: 75
    }
  });
  await page.getByRole('button', { name: 'Submit' }).click();
});