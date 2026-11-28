import {test , expect} from '@playwright/test'

test('Advanced Loactor Concepts', async({page})=>{
    //Case 1: nth () Locator Click 2nd Product

    await page.goto('https://www.automationexercise.com/products');

    //await page.mouse.wheel(0,250);


    const ProductsCard = page.locator('.features_items .product-image-wrapper');
    await expect(ProductsCard.first()).toBeVisible();

    
    // const SecondProduct = ProductsCard.nth(1);
    // await SecondProduct.getByRole('link', {name: 'View Product'}).click();

    // await expect(page).toHaveURL(/\/product_details\/2/);

    // console.log("Current URL", page.url());

// Case 2 : First and Last() product click
    await page.mouse.wheel(0,250);
    // const FirstName = ProductsCard.first().locator('.productinfo p')
    // const FirstText = (await FirstName.textContent())?.trim();
    // console.log ('First Product:', FirstText);

    // await page.mouse.wheel(0,1000);

    // const LastName = ProductsCard.last().locator('.productinfo p');
    // const LastText = (await LastName. textContent())?.trim();
    // console.log ('Last Product:', LastText);

    // await expect (FirstName).toContainText('Blue Top');
    // await expect (LastName).toContainText('Graphic Design', {ignoreCase :true});

// Case 3: hasText() Find Blue Top Click Product

    // const blueTopCard = page.locator('.features_items .product-image-wrapper')
    // .filter({ hasText: 'Blue Top' });
    // await expect(blueTopCard).toHaveCount(1);

    // await blueTopCard.getByRole('link', { name: 'View Product' }).click();

    // await expect(page).toHaveURL(/\/product_details\/1/);
    // console.log('Current URL:', page.url());

// Case 4: filter({ visible: true }) Count visible product

    // const productCards = page.locator('.features_items .product-image-wrapper');
    // await expect(productCards.first()).toBeVisible();

    // const visibleCards = productCards.filter({ visible: true });

    // const count = await visibleCards.count();
    // console.log('Visible products:', count);

    // expect(count).toBeGreaterThan(0);

// Case 5 : Multiple Elements Loop Click first 3 ADd to card button

const productCards = page.locator('.features_items .product-image-wrapper');
  await expect(productCards.first()).toBeVisible();

  const infoButtons = page.locator('.productinfo .add-to-cart');
  expect(await infoButtons.count()).toBeGreaterThanOrEqual(3);

  const cartModal = page.locator('#cartModal');

  for (let i = 0; i < 3; i++) {
    const card = productCards.nth(i);

    const name = (await card.locator('.productinfo p').textContent())?.trim();

    await card.hover();
    await card.locator('.product-overlay .add-to-cart').click();

    await expect(cartModal).toBeVisible();
    await cartModal.getByRole('button', { name: 'Continue Shopping' }).click();
    await expect(cartModal).toBeHidden();

    console.log(`Added product ${i + 1}: ${name}`);
  }

});