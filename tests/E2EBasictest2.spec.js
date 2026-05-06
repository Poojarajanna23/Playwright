const {test,expect} = require ('@playwright/test');

test('Login test', async ({page}) => {

    const itemsTitle = page.locator('.card-body b');
    const product= page.locator('.card-body');
    const productName="ZARA COAT 3";

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login',{
        waitUntil: 'domcontentloaded'
    });

   
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');

    console.log( await page.title());
   await page.locator('#userEmail').fill('poojaraj.qa@gmail.com');
    await page.locator('#userPassword').fill('Archana@123');
    await page.locator('#login').click();
    await itemsTitle.first().waitFor();
    
   console.log (await itemsTitle.allTextContents()); 

   const count = await itemsTitle.count();


    
 await console.log(count);


for (let i=0; i<count; i++){


if (await product.nth(i).locator("b").textContent() === productName ){



await product.nth(i).locator("text= Add To Cart").click();
break;

}


}

await page.locator("button[routerlink='/dashboard/cart']").click();

await page.locator("div li").first().waitFor();

const boolean =await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

expect(boolean).toBeTruthy();

await page.locator("button[type='button']").last().click();

await console.log(boolean);

await page.locator("[placeholder='Select Country']").pressSequentially("Ind",{delay:100});

const country = page.locator(".ta-results");

await country.waitFor();

const optioncount = await country.locator("button");



console.log(await optioncount.count());

const countrycount= await optioncount.count();

for(let i=0; i< countrycount ; i++)
{

const  conc =await country.locator("button").nth(i).textContent();

if(conc === " India")
{ 
    
    await country.locator("button").nth(i).click();

    

    break;
}
}

await page.locator("a:has-text('Place Order')").click();
   await expect( page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

  const orderid =  await page.locator(".em-spacer-1 .ng-star-inserted").textContent();

   await console.log(orderid);
   await page.locator("button[routerlink='/dashboard/myorders']").click();

   const orderTable = page.locator("tbody tr");

   for (let  i=0; i< await orderTable.count(); i++)
   {

const rowOrderId = await orderTable.nth(i).locator("th").textContent();

if( orderid.includes(orderid))

    {

 await orderTable.nth(i).locator("button").first().click();

 
 
break;

    }



   }


   const orderidText = await page.locator(".col-text").textContent();
   
   await (orderid.includes(orderidText).toBeTruthy);
















});




