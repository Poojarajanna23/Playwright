const { test , expect} = require('@playwright/test');

test('First PW Test', async ({ page }) => {

  //await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveURL(/loginpagePractise/);

  console.log(await page.title());

  const userName = page.locator('#username');
  const password = page.locator('#password');
  const cardTitle = page.locator(".card-body a");

  await userName.fill('poojamurali');
  await password.fill('Learning@830$3mK2');
  await page.locator('#signInBtn').click();
  console.log(await page.locator("[style*='block']").textContent());

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
   await page.locator('#signInBtn').click();

   console.log(await cardTitle.first().textContent());
    console.log(await cardTitle.nth(1).textContent());

    console.log(await page.locator(".card-body a").allTextContents());
     
    
     
   

  

  

});


