const { test, expect } = require('@playwright/test');

class CartPage {




    constructor(page) {

        this.page = page;
        this.orderList = page.locator("div li");
        this.checkoutbutton = page.locator("button[type='button']").last();
        this.countryDropdown = page.locator("[placeholder='Select Country']");
        this.country = page.locator(".ta-results");
        this.optioncount = this.country.locator("button");

    }


    async validateCartItemAndCheckOut(productName) {
        await this.orderList.first().waitFor();
        const boolean = await this.page.locator("h3:has-text('"+productName+"')").isVisible();
        await  expect(boolean).toBeTruthy();
        await console.log(boolean);

        await this.checkoutbutton.click();

    }


    async selectCountryDD(countrytext, selectcountry) {

        await this.countryDropdown.pressSequentially(countrytext, { delay: 100 });
        await await this.country.waitFor();
        
        const countrycount = await this.optioncount.count();

        console.log(await this.optioncount.count());

        for (let i = 0; i < countrycount; i++) {

            const conc = await this.country.locator("button").nth(i).textContent();

            if (conc === selectcountry) {

                await this.country.locator("button").nth(i).click();



                break;
            }
        }

    }






}


module.exports = {CartPage} ;





