const BasePage = require('./basePage');
const {expect} = require("@playwright/test");

class managementMenu extends BasePage {
    constructor(page) {
        super(page);
        this.managementMenus = ".kt-menu__link-text";
    }
    async clickManagementMenu(){
        await this.page.locator(this.managementMenus).nth(3).click();
        // await this.page.locator('//span[text()="Management"]').click();
    }
    async clickProductMenu(){
        await this.page.locator(this.managementMenus).nth(4).click();
        // await this.page.locator('//span[text()="Product"]').click();
    }
}
module.exports = managementMenu;