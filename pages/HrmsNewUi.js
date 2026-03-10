const{expect,test}=require('@playwright/test');
class HrmsNewUiLogin{

constructor(page)
{
    
    this.page=page;
    this.url="https://auth.qacri.com/login";
    this.username=page.getByPlaceholder('Email address or mobile number');
    this.next=page.getByRole('button',{name:'Next'})
    this.password=page.getByPlaceholder('Password');
    this.signIn=page.getByRole('button',{name:'Sign In'})
    this.signInHeading=page.getByRole('heading',{name:'Sign In'}).first();

}
async goto()
{
await this.page.goto(this.url)
}


async LoginwithCredentials(username,password)
{

    await this.username.fill(username);
    await this.next.click();
    await this.password.fill(password);
    await this.signIn.click();

}



async validatingLoginPage(url)
{

await expect(this.signInHeading).toBeVisible();
await expect(this.loginPageUrl).tohaveURL(url);
}
}
module.exports=HrmsNewUiLogin;
