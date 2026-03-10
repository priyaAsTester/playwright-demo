const{test,expect}=require('@playwright/test')
const HrmsNewUiLogin=require('../pages/HrmsNewUi')
const ReadExcel=require('../utils/readfile')

let Login;
let data;
data=new ReadExcel('testdata.xlsx')
const users=data.readfile();

for(const user of users){
test(`validating the login feature${user.username}`,async({page})=>
    
{
   
    // const browser=await chromium.launch();
    // const page=await browser.newPage();
    Login=new HrmsNewUiLogin(page);
    await Login.goto();
      
    let username=user.username;
    let password=user.password;
    console.log(username)
    console.log(password)
    await Login.LoginwithCredentials(username,password)
    await expect(page).toHaveURL("https://myhinez.qacri.com/all-products");
}
)
}


