import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import {ForgotPasswordPage} from '../Pages/ForgotPasswordPage';


test.describe('Login Tests', () => {

    let login: LoginPage;
    let forgotPassword : ForgotPasswordPage;

    test.beforeEach(async({page})=>{
        login = new LoginPage(page);
        forgotPassword = new ForgotPasswordPage(page);
    })


    test('Login test with valid credentials', async ({ page }) => {


        await login.gotoLoginPage();
        await login.login('Ramya1189', '123456');
        //await console.log(page.title());
        await expect(page).toHaveTitle(/Hotel Reservation System/);

    })

    test('Login with invalid credentials', async ({ page }) => {

        await login.gotoLoginPage();
        await login.login('Ramya', '12345');
        const errorMessage = page.locator("div.auth_error");
        //await expect(errorMessage).toBeVisible(); invalid as there should be a exact text message to be Visible
        //toHavetext() - matches text exactly 
        // //toContainText - mathces text partially
        await expect(errorMessage).toContainText("Invalid Login details");

    })
    test('Verifying Forgot Password Link', async ({ page }) => {

        await login.gotoLoginPage();
        await login.ForgotPasswordlink();
        await expect(page).toHaveTitle("Adactin.com - Forgot Password ");
        await forgotPassword.forgotPasswordEmail('Ramya60100@gmail.com');
        await forgotPassword.EmailPwdClick();
        const msg = page.locator('td.reg_success');
        await expect(msg).toContainText("An email has been sent to your email address containing Username and Password. Please check your email.");


    }, { timeout: 100000}) ;

    test('Verifying the Reset Button',async ({page}) => {
        
        await login.gotoLoginPage();
        await login.ForgotPasswordlink();
        await expect(page).toHaveTitle("Adactin.com - Forgot Password ");
        await forgotPassword.forgotPasswordEmail('Ramya60100@gmail.com');
        await forgotPassword.ResetButtonClcik();
        const email = page.locator('#emailadd_recovery');
        await expect(email).toBeEmpty();

    })
})