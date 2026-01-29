import { Page, Locator } from '@playwright/test';

export class ForgotPasswordPage {
    page: Page;
    emailid_textbox: Locator;
    emailPwd_button: Locator;
    reset_button: Locator;

    constructor(page: Page) { //page object has to be passed so we use constructor and pass page as argument

        this.page = page
        this.emailid_textbox = page.locator('#emailadd_recovery');
        this.emailPwd_button = page.locator('#Submit');
        this.reset_button = page.locator('#Reset');
    }

    async forgotPasswordEmail(email) {

        await this.emailid_textbox.fill(email);

    }
    async EmailPwdClick() {
        await this.emailPwd_button.click();
    }
    async ResetButtonClcik() {

        await this.reset_button.click();
    }
}
