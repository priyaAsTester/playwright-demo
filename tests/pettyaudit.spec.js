const{test,expect}=require('@playwright/test')
test("testing dropdown",async({page})=>{
    await page.goto("https://pettyaudit.com/")
    await page.getByPlaceholder('Enter email address').fill('rohit@xyz.com')
    await page.locator('#password').fill('Pass@word1')
    await page.getByRole('button',{name:'Login'}).click()
    await page.waitForTimeout(5000)
    await page.getByText('Home').click();
    await page.getByText('All').first().click();
    //const dd=page.locator('.flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer bg-white relative w-');
    await page.getByText('DHomes').click();
    await page.waitForTimeout(5000)



})