const { test, expect } = require('@playwright/test');
const LoginPage = require ("../pages/loginPage");
const ManagementMenu= require("../pages/management")


test.describe(`Test Suit`, () => {
    test('Test scenario', async ({page}) => {
        const loginPage   = new LoginPage(page);
        const managementPage   = new ManagementMenu(page);

        await test.step(`Go to login page`, async () => {
            await loginPage.goto();
        })

        await test.step('Do Login', async () =>{
            await loginPage.login('admin@gmail.com', 'Waadaa2024');

        })

        await test.step('isLoggedIn', async () =>{
            await loginPage.verifyLogin();
        })
        await test.step('gotoManagement', async () =>{
            await managementPage.clickManagementMenu();
            //await page.pause();
        })
        await test.step('gotoProductMenu', async () =>{
            await managementPage.clickProductMenu();
            await page.pause();
        })

    });
})

