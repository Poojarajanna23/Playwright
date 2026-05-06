const { test, expect, request } = require('@playwright/test')

const { APIUtils, APiUtils } = require('../Utils/APiUtils');

const loginpayload = { userEmail: "poojaraj.qa@gmail.com", userPassword: "Archana@123" }

const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] }


let response = {};


test.beforeAll(async () => {

    const apicontext = await request.newContext();

    const apiUtilsnew = new APiUtils(apicontext, loginpayload);

    response = await apiUtilsnew.createOrder(orderPayload);











});


test('Letsshop test', async ({ page }) => {




    await page.goto('https://rahulshettyacademy.com/client/');
    await page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);

    await page.reload();




    const itemsTitle = page.locator('.card-body b');
    const product = page.locator('.card-body');
    const productName = "ZARA COAT 3";






    console.log(await page.title());

    console.log(response.orderId);


    await page.locator("button[routerlink='/dashboard/myorders']").click();

    const orderTable = page.locator("tbody tr");


    for (let i = 0; i < await orderTable.count(); i++) {

        const rowOrderId = await orderTable.nth(i).locator("th").textContent();

        if (rowOrderId.includes(response.orderId)) {

            await orderTable.nth(i).locator("button").first().click();

            break;

        }



    }


    const orderidText = await page.locator(".col-text").textContent();

    await (response.orderId.includes(orderidText).toBeTruthy);






}


)