const{test,expect} = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')

let loginPage;

 test.beforeEach(async({page})=>{
    
       loginPage=new LoginPage(page);
       await loginPage.goto("https://auth.qacri.com/login");
 })

test.only("verifying login and logout",async({page})=>
    {
        
        await expect(loginPage.image).toBeVisible();
        await expect(loginPage.imageCarousal).toBeVisible();
        await expect(loginPage.horizontalslide).toBeVisible();
        await loginPage.Login("mohan123@yopmail.com","Password@123");
        await expect(loginPage.letsStart).toBeVisible();
        await loginPage.Logout();
        await page.waitForTimeout(10000);
        await expect(page).toHaveURL(loginPage.loginUrl);
        //await page.context().storageState({ path: 'auth.json' });
        
      
   })

   test("Verifying Error message",async({page})=>{
   
    await loginPage.LoginWithoutEmail();
    await expect(loginPage.errorRequired).toBeVisible();

})

//test.use({ storageState: 'auth.json' });

test("verifying letsstart message",async({page})=>{
        //loginPage=new LoginPage(page);
        await page.goto("https://mypeople.qacri.com/dashboards");        
        await expect(loginPage.letsStart).toBeVisible();
        await loginPage.Logout();


})

test("clicking Leaveapply and checking the navigation",async({page})=>{
        await page.goto("https://mypeople.qacri.com/dashboards")
        await loginPage.clickingLeave();
        await expect(loginPage.leaveapplication).toBeVisible();
        await expect(page).toHaveURL(loginPage.leaveUrl)

}
)