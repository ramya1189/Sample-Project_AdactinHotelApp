
import { Page, Locator } from '@playwright/test';


export class LoginPage {

    username_textbox: Locator
    password_textbox: Locator
    Login_button: Locator
    forgotpasswordlink: Locator
    page: Page;
    newuser_link: Locator;


    constructor(page: Page) { //page object has to be passed so we use constructor and pass page as argument

        this.page = page //I'm creating a class variable called page and value is equal to page in contructor

        this.username_textbox = page.locator('#username')
        this.password_textbox = page.locator('#password')
        this.Login_button = page.locator('#login')
        this.forgotpasswordlink = page.locator("a[href='ForgotPassword.php']")
        this.newuser_link = page.locator("a[href='Register.php']");

    }

    async gotoLoginPage() {
        await this.page.goto("https://adactinhotelapp.com/HotelAppBuild2/"); //https://adactinhotelapp.com/HotelAppBuild2/
    }

    async login(username: any, password: any) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.Login_button.click();
    }

    async ForgotPasswordlink() {
        await this.forgotpasswordlink.click();

    }

    async gotoNewUserRegistration(){
        await this.newuser_link.click();
    }
}
