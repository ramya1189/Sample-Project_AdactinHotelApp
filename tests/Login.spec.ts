import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ForgotPasswordPage } from '../Pages/ForgotPasswordPage';
import { NewUserRegistration } from '../Pages/NewUserRegistrationPage';



test.describe('Login Tests', () => {

    let login: LoginPage;
    let forgotPassword: ForgotPasswordPage;
    let newUserRegistration: NewUserRegistration;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        forgotPassword = new ForgotPasswordPage(page);
        newUserRegistration = new NewUserRegistration(page);
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


    }, { timeout: 100000 });

    test('Verifying the Reset Button', async ({ page }) => {

        await login.gotoLoginPage();
        await login.ForgotPasswordlink();
        await expect(page).toHaveTitle("Adactin.com - Forgot Password ");
        await forgotPassword.forgotPasswordEmail('Ramya60100@gmail.com');
        await forgotPassword.ResetButtonClcik();
        const email = page.locator('#emailadd_recovery');
        await expect(email).toBeEmpty();

    })
    test('verify error messages', async ({ page }) => {
        await login.gotoLoginPage();
        await login.gotoNewUserRegistration();
        await expect(page).toHaveTitle(/New User Registration/);
        await newUserRegistration.RegisterButtonClick();
        await expect(page.locator('#username_span')).toContainText("Username is Empty");
        await expect(page.locator('#password_span')).toContainText("Password is Empty");
        await expect(page.locator('#re_password_span')).toContainText("Confirm Password is Empty");
        await expect(page.locator('#full_name_span')).toContainText("Full Name is Empty");
        await expect(page.locator('#email_add_span')).toContainText("Email Address is Empty");
        await expect(page.locator('#captcha_span')).toContainText("Captcha is Empty");
        await expect(page.locator('#tnc_span')).toContainText("You must agree to Terms and Conditions");
    })
    test('verify the reset button', async ({ page }) => {
        await login.gotoLoginPage();
        await login.gotoNewUserRegistration();
        await newUserRegistration.verifyresetbutton(
            'Ramya2017',
            '123456',
            '123456',
            'RamyaKarthik',
            'nilavinramya@gmail.com'

        );
        await expect(page.locator('#username_span')).toBeEmpty();
        await expect(page.locator('#password_span')).toBeEmpty();
        await expect(page.locator('#re_password_span')).toBeEmpty();
        await expect(page.locator('#full_name_span')).toBeEmpty();
        await expect(page.locator('#email_add_span')).toBeEmpty();
        await expect(page.locator('#captcha_span')).toBeEmpty();
        await expect(page.locator('#tnc_span')).toBeEmpty();


    })
    test('verify the error message for the format of email textbox',async({page})=>{
        await login.gotoLoginPage();
        await login.gotoNewUserRegistration();
        await newUserRegistration.verifyemailerrormessage('Ramya123');
        await newUserRegistration.RegisterButtonClick();
        await expect(page.locator('#email_add_span')).toContainText("Invalid email, Please enter correct email.");

    })
})