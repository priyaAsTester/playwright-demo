const{expect}=require("@playwright/test")

class LoginPage
{

    constructor(page)

    {
      this.page=page;
      this.username=page.locator('#email_or_mobile');
      this.next=page.getByRole('button',{name:'Next'});
      this .password=page.getByPlaceholder('Password');
      this.signIn=page.getByRole('button',{name:'Sign In'});
      this.logout=page.locator("//span[contains(@id,'5ulbH1_')]").first()
      this.access=page.getByRole('link',{name:'Access'}).first();
      this.letsStart=page.getByText("Let's Start!");
      this.signInText=page.getByText("Sign In");
      this.loginUrl="https://auth.qacri.com/login";
      this.image=page.getByAltText("Myhinez")
      this.errorRequired=page.getByText(/please enter your email/i);
      this.imageCarousal=page.getByRole('group',{name:'1 / 6'}).first();
      this.applyLeave=page.locator('//button[@type="button"]');
      this.leaveapplication=page.getByText('Leave Application');
      this.leaveUrl="https://mypeople.qacri.com/time-attendance/leaves/apply-leave"
      this.horizontalslide=page.getByText("My Hub");

    }   

async goto(url)
{
await this.page.goto(url);

}


async Login(username,password){
  await this.username.fill(username);
  await this.next.click();  
  await this.password.fill(password);
  await this.signIn.click();
  //await this.page.waitForURL(/all-products/i);
  await this.access.click();

}

async LoginWithoutEmail(){
await this.next.click();

}
async Logout(){
  await this.logout.click();

}

async clickingLeave(){
 await this.applyLeave.nth(0).click();

}

}



module.exports= LoginPage ;

