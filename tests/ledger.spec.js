const {test,expect}=require('@playwright/test')

test("dropdown hanging",async({page})=>{
    await page.goto("https://auth.qacri.com/login")
    await page.getByPlaceholder("Email address or mobile number").fill("skytesting27@gmail.com");
    await page.getByText("Next").click();
    await page.getByPlaceholder("Password").fill("Password@123")
    await page.getByRole('button',{name:'Sign In'}).click();
    await page.getByText('Access').nth(2).click();
    await expect(page).toHaveURL("https://myledger.qacri.com/payroll/performance/bonus");
    await page.locator('#flowbite-sidebar-item-_r_9_').click();
    await page.getByRole('button',{name:'Add Bank'}).click();
    await page.locator("#bank_name").click();
    await page.getByText("AB Bank").nth(1).click();
    await page.locator('#account_name').click();
   await page.waitForTimeout(5000)
    const bank=await page.locator('.rc-virtual-list-holder-inner').allTextContents();
    console.log(bank)
    await page.getByText("Current Account").nth(1).click();
     //await page.waitForTimeout(5000)
     await page.getByRole('checkbox',{name:'Add Debit Card Details'}).click();

    await page.locator('#exp_date').click();
    await expect(page.locator('.ant-picker-panel')).toBeVisible();
    await page.waitForTimeout(1000);
    
    const neededYear=2050;
    const neededMonth="Apr";
    
    // Click on decade/year button to enter year selection mode
    await page.locator('.ant-picker-year-btn').click();
    await page.waitForTimeout(500);
    
    // Navigate to the correct decade
    while(true){
        let value = await page.locator('.ant-picker-decade-btn').textContent();
        let [startYear, endYear] = value.split('-').map(v => parseInt(v.trim()));
        
        console.log(`Current decade: ${startYear}-${endYear}`);
        
        if(neededYear >= startYear && neededYear <= endYear){
            break;
        }
        if(neededYear > endYear){
            await page.locator('.ant-picker-header-super-next-btn').click();
        } else {
            await page.locator('.ant-picker-header-super-prev-btn').click();
        }
        await page.waitForTimeout(500);
    }
    
    // Wait for picker to update after navigation
    await page.waitForTimeout(1000);
    
    // Click the year - look for year in the picker panel
    console.log(`Clicking year: ${neededYear}`);
    let yearElement = page.locator(`.ant-picker-cell-inner:has-text("${neededYear}")`);
    await yearElement.click();
    await page.waitForTimeout(500);
    
    // Click the month
    console.log(`Clicking month: ${neededMonth}`);
    await page.getByText(`${neededMonth}`).nth(1).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('xxx').fill("123");

    await page.setInputFiles("//input[@name='file']","tests/testingadhar.png")
    await page.getByRole('button',{name:'Save'}).click();
    await page.waitForTimeout(10000)


}

)

