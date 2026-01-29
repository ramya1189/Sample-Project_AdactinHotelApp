import { test , expect , Locator} from '@playwright/test';

import { webkit, chromium, firefox, Page, Browser } from '@playwright/test';

test('login test' , async()=>{
const browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
const page:Page=await browser.newPage();
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    const username :Locator = await page.locator('#username');
    const password:Locator = await page.locator('#password');
    const submit :Locator = await page.locator('#submit');
    const Logout : Locator = await page.getByRole('button', { name: 'Log out' });

    await username.fill('student');
    await password.fill('Password123');
    await submit.click();

    const title = await page.title();
    console.log("Page title" , title);
    expect(title).toEqual('Logged In Successfully');
    await Logout.isEnabled();

    await browser.close();

});
