import {test , expect , Browser , Page , Locator} from '@playwright/test';
import { webkit, chromium, firefox } from '@playwright/test';
import { channel } from 'node:diagnostics_channel';

test('Naveen Automation Login Test', async () => {

    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const email:Locator = await page.locator('#input-email');
    const password:Locator= await page.locator('#input-password');
    const LoginBtn:Locator=await page.locator("input[value='Login']");

    await email.fill("ramya60100@gmail.com");
    await password.fill('123456');
    await LoginBtn.click();

    const title =await page.title();
    console.log("Page Title", title);

    await page.screenshot({path:'naveenlogin.png'});
    expect(title).toEqual('My Account');

    await browser.close();

});


test('Naveen Automation Registration Test', async () => {
    //launch a chrome browser and open the link for page
   const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    
    //clicking the continur button for registration:

    const continuebtn: Locator=await page.locator('a.btn.btn-primary');
    await continuebtn.click();

    //enter value for FirstName,LastName,Email Telephone Passowrd and Paswword confirmation , Subcribe , checkbox and click continue button

    const FirstName:Locator = await page.locator('#input-firstname');
    await FirstName.fill('Ramya');

    const LastName:Locator = await page.locator('#input-lastname');
    await LastName.fill('Karthik');

    const Email:Locator = await page.locator('#input-email');
    await Email.fill('234@gmail.com');

    const telephone:Locator = await page.locator('#input-telephone')
    await telephone.fill('8754436010');

    const password:Locator= await page.locator('#input-password');
    password.fill('123456');

    const pwdconfirm:Locator= await page.locator('#input-confirm');
    pwdconfirm.fill('123456');

    const Subscribe:Locator = await page.locator("input[value='0']")
    await Subscribe.isChecked();
    expect(Subscribe).toBeChecked();

    const agreeCheckbox:Locator = await page.locator('[name="agree"]')
    await agreeCheckbox.click();
    expect(agreeCheckbox).toBeChecked();

    const continueBtn:Locator = await page.locator('input.btn.btn-primary');
    await continueBtn.click();

    const title = await page.title();
    console.log('Page Title after Registration:', title);
    expect(title).toEqual('Register Account');

    await browser.close();
}); 
