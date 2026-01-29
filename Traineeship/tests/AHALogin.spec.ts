import { test, expect , Browser , Page , Locator} from '@playwright/test';
import { webkit, chromium, firefox } from '@playwright/test';

test('Hotel Adactin Login Test', async () => {

  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();
  await page.goto("http://adactinhotelapp.com/index.php");
    const username: Locator = await page.locator("#username");
    const password: Locator = await page.locator("#password");
    const login: Locator = await page.locator("#login");    

    await username.fill("ramya1189");
    await password.fill("123456");
    await login.click();            

    const title = await page.title();
    console.log("Home Page Title:", title);
    expect(title).toEqual('Adactin.com - Search Hotel');

    await browser.close();

});