const { expect,test } =require('@playwright/test')

test("clicking the newtab",async({page,context})=>{
 await page.goto("https://www.facebook.com/")

  const link=page.getByRole('link', { name: 'Forgotten password?' })
  
  const url=await link.getAttribute('href')
  const newpage=await context.newPage();
 
  await newpage.goto(url)
  //newpage.getByPlaceholder("Email address or mobile number").fill("sabaripriya");
//newpage.waitForTimeout(5000)
  newpage.locator('button#did_submit').click();

 await  expect(newpage.getByRole('dialog',{name:'Dialogue content'})).toBeVisible();

})