// pages/loginPage.js
const BasePage = require('./basePage');
const {expect} = require("@playwright/test");

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameField = '#email';
        this.passwordField = '#password';
        this.loginButton = '.btn-pill';
        this.dashboardBreadcrumb = '.kt-subheader__breadcrumbs-link';

    }
    async goto(){
        await this.page.goto("https://admin.qa.waadaa.app/login/");
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
    async verifyLogin(){
        const element = this.page.locator(this.dashboardBreadcrumb).nth(0);
        await expect(element).toHaveText('Dashboard');

    }

}

module.exports = LoginPage;
