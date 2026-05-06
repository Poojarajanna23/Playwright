const { test, expect } = require('@playwright/test');

const { LoginPage } = require('./pageobjects/LoginPage');
const { DashBoard } = require('./pageobjects/DashBoard');
const { CartPage } = require('./pageobjects/CartPage');
const data=JSON.parse(JSON.stringify(require('../Utils/PlaceOrderTestData.json')));


test('Login test', async ({ page }) => {

    // const itemsTitle = page.locator('.card-body b');
    // const product = page.locator('.card-body');
    const productName = "ZARA COAT 3";

    const username = "poojaraj.qa@gmail.com";
    const password = "Archana@123";



    // await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.NavigateTO();

    console.log(await page.title());


    await loginPage.validLogin(data.username, data.password);
    // await itemsTitle.first().waitFor();

    const dashboard = new DashBoard(page);
    await dashboard.searchForProductandAddToCart(data.productName);
    await dashboard.NavigateTOCart();

    const cartpage = new CartPage(page);
    cartpage.validateCartItemAndCheckOut(productName);
    cartpage.selectCountryDD("Ind", " India");






    await page.locator("a:has-text('Place Order')").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

    const orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();

    await console.log(orderid);
    await page.locator("button[routerlink='/dashboard/myorders']").click();

    const orderTable = page.locator("tbody tr");

    for (let i = 0; i < await orderTable.count(); i++) {

        const rowOrderId = await orderTable.nth(i).locator("th").textContent();

        if (orderid.includes(orderid)) {

            await orderTable.nth(i).locator("button").first().click();



            break;

        }



    }


    const orderidText = await page.locator(".col-text").textContent();

    await (orderid.includes(orderidText).toBeTruthy);
















});




