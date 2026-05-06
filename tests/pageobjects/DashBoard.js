class DashBoard


{

constructor (page)

{
 
    this.itemsTitle = page.locator('.card-body b');
     this.product = page.locator('.card-body');
     this.cart= page.locator("button[routerlink='/dashboard/cart']");


}



async searchForProductandAddToCart(productName)

{
await this.itemsTitle.first().waitFor();
 console.log(await this.itemsTitle.allTextContents());
   const count = await this.itemsTitle.count();
   await console.log(count);

   for (let i = 0; i < count; i++) {


        if (await this.product.nth(i).locator("b").textContent() === productName) {



            await this.product.nth(i).locator("text= Add To Cart").click();
            break;

        }


    }


}

async NavigateTOCart()

{

 await this.cart.click();

}





    


    

   


}

module.exports = {DashBoard};