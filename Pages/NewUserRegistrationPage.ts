import { Page, Locator } from '@playwright/test';

export class NewUserRegistration {
    page: Page;
    username_textbox: Locator;
    pwd_textbox: Locator;
    confirmpwd_textbox: Locator;
    fullname_textbox: Locator;
    email_textbox: Locator;
    captcha_image: Locator;
    captch_textbox: Locator;
    agree_checkbox: Locator;
    register_button: Locator;
    reset_button: Locator;
    loginpage_link: Locator;



    constructor(page: Page) {

        this.page = page;
        this.username_textbox = page.locator("#username");
        this.pwd_textbox = page.locator("#password");
        this.confirmpwd_textbox = page.locator("#re_password");
        this.fullname_textbox = page.locator("#full_name");
        this.email_textbox = page.locator("#email_add");
        this.captcha_image = page.locator('#captcha');
        this.captch_textbox = page.locator('#captcha-form');
        this.agree_checkbox = page.locator('#tnc_box');
        this.register_button = page.locator('#Submit');
        this.reset_button = page.locator('#Reset')
        this.loginpage_link = page.locator("a[href='index.php']");
    }

    async RegisterButtonClick(){
        await this.register_button.click();
    }

    async verifyresetbutton(
        username: string ,
        password:string,
        confirmpwd_textbox:string,
        fullname_textbox:string,
        email_textbox:string,


    ){
        await this.username_textbox.fill(username);
        await this.pwd_textbox.fill(password);
        await this.confirmpwd_textbox.fill(confirmpwd_textbox);
        await this.fullname_textbox.fill(fullname_textbox);
        await this.email_textbox.fill(email_textbox);
        await this.agree_checkbox.check();
        await this.reset_button.click();

    }

    async verifyemailerrormessage(email_textbox:string){
        await this.email_textbox.fill(email_textbox);
        
    }


}