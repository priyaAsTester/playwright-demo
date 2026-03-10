const{test,expect}=require('@playwright/test')
const recruitmentForm1=require('../pages/recruitmentForm1');
const { fileURLToPathBuffer } = require('node:url');

let recruitmentForm;
test("validating the textbox readonly value",async({page})=>
{

recruitmentForm=new recruitmentForm1(page);
await recruitmentForm.goto();
const nameValue=await recruitmentForm.gettingTheValue();
expect(nameValue).toBe("Priya");
const numValue=await recruitmentForm.gettingMobileNumber();
expect(numValue).toBe('9988998789');
//expect(await recruitmentForm.mobileNo).toBeDisabled();
const email=await recruitmentForm.gettingEmailid();
expect(email).toBe("priya123@yopmail.com")
await recruitmentForm.clickingGender("Male","0")
await recruitmentForm.clickingDOB();
//await recruitmentForm.clickingBloodgroup('AB+');
}
)
