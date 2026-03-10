const{test,expect}=require('@playwright/test')

class RecruitmentForm1 
{
    constructor(page)
    {
        this.page=page;
        this.name=page.getByRole('textbox',{name:'name'}).first();
        this.mobileNo=page.getByLabel('Contact Number').first();
        this.emailId=page.locator('input[id=email]');
        this.gender=page.locator('.ant-select-selector').first();
        this.genderValues=page.getByRole('option')
        this.bloodgroup=page.locator('input[type="search"]').nth(2);
        this.dob=page.getByLabel("Date of Birth")
        this.datepicker=page.locator('.ant-picker-header-view')
    }

async goto()
{

await this.page.goto("https://myrecruit.qacri.com/onboarding/personal-details/eyJpdiI6IjR4TkpMcVovV0YvbnZFNkMwYlFXZHc9PSIsInZhbHVlIjoicGt2T1R2d04ya0JvYmlwL2dOQ2VXQT09IiwibWFjIjoiYzg1MmI3OTE0ZDE3NjBhZmNjZGRjNDg3YzFiMWM4N2E4OTQwOWRjNTQyYTUwZmVjODE3Njg3MjVjZjE3MTVlMiIsInRhZyI6IiJ9")

}
async gettingTheValue()
{

    return await this.name.inputValue();
    

}
async gettingMobileNumber()
{
 return await this.mobileNo.inputValue();

}
async gettingEmailid(){
    return await this.emailId.inputValue();


}

async clickingGender(value,num){
const Gender=this.page.locator('.ant-select-selector').nth(0);
await this.page.locator('#rc_select_0').click();
await this.page.locator(`#rc_select_0_list${num}`)
await this.page.locator('.rc-virtual-list-holder-inner').waitFor({ state: 'visible' });
await this.page.getByText(value,{exact:true}).nth(1).click();
const values=await Gender.textContent();
console.log(values)
}


async elementClick(){
const dropdownTrigger = page.locator('.ant-select-selector').first();
await dropdownTrigger.click();
const dropdownPanel = page.locator('.ant-select-dropdown:visible');
const options = dropdownPanel.getByRole('option');
const value = await options.textContent();
await options.nth(1).click();
return value
}

async clickingBloodgroup(value){
const BloodGroup=this.page.locator('.ant-select-selector').nth(1);
await this.page.locator('#rc_select_1').click();
await this.page.locator('#rc_select_1_list')
await this.page.locator('.rc-virtual-list-holder-inner').nth(1).waitFor({ state: 'visible' });
await this.page.getByText(value).click();
const values=await BloodGroup.textContent();
console.log(values)
}

async clickingDOB(){
 await this.dob.click();
 await expect(this.datepicker).toBeVisible();
 let yearClick=await this.page.locator('.ant-picker-year-btn').textContent();
 expect(yearClick).toContain("2008")
 console.log(yearClick)
 const yearNeed="2007"

 await this.page.locator('.ant-picker-year-btn').click();
  
  let headervalue=await this.page.locator('.ant-picker-decade-btn').textContent();
    let year=headervalue.split("-")[0]


while(yearNeed>=year){
  
    await this.page.getByText(`${yearNeed}`,{exact:true}).click()
    let Now=await this.datepicker.textContent();
    console.log("printingfrom greater," + Now);
       if(Now==yearNeed)
        {
            console.log(Now)
            break;
        }
 }
 while(yearNeed<=year ){
    await this.page.locator('.ant-picker-header-super-prev-btn').click();
    let headervalue=await this.page.locator('.ant-picker-decade-btn').textContent();
     year=headervalue.split("-")[0]
  if (yearNeed ==year){
    await this.page.getByText(`${yearNeed}`,{exact:true}).click()
    let month="feb"
    let day="25"
 await this.page.getByText(`${month}`).click();
  
 await this.page.getByText(`${day}`).click();
  
await expect(this.dob).toHaveValue("25-02-2007")
break;
    }

}
    
 }
 
}



module.exports= RecruitmentForm1