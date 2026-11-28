import {test ,  expect} from  '@playwright/test'

test ('End to End For Register new user', async ({page})=>{

    await page.goto('https://www.automationexercise.com/')
    await page.locator('[href="/login"]').click();

    await expect (page.getByText('New User Signup!')).toBeVisible();

    const uniqueEmail = `yg2608_${Date.now()}@gmail.com`;
    await page.locator('//input[@data-qa="signup-name"]').fill('Yash Gupta')
    await page.locator('//input[@data-qa="signup-email"]').fill(uniqueEmail)
    await page.locator('//button[@data-qa="signup-button"]').click();

    await expect(page.getByText('Enter Account Information')).toBeVisible();

    await page.locator('#id_gender1').check();
    await expect(page.locator('#id_gender1')).toBeChecked();

    await page.locator('[data-qa="password"]').fill('YG@2345');

    await page.mouse.wheel(0,200);

    await page.locator('[data-qa="days"]').selectOption('27');
    await page.locator('[data-qa="months"]').selectOption('August');
    await page.locator('[data-qa="years"]').selectOption('2021');

    await page.locator('#newsletter').check();
    await page.locator('#optin').check();

    await page.mouse.wheel(0,200);

    await page.locator('#first_name').fill('Test');
    await page.locator('#last_name').fill('User');
    await page.mouse.wheel(0,300);
    await page.locator('#address1').fill('123 Test Street');
    await page.locator('#country').selectOption('India');
    await page.locator('#state').fill('Gujarat');
    await page.locator('#city').fill('Ahmedabad');
    await page.locator('#zipcode').fill('380001');
    await page.locator('#mobile_number').fill('9876543210');

    await page.mouse.wheel(0,200);

    await expect(page.locator('[data-qa="create-account"]')).toBeVisible();
    await page.getByRole('button',{name : 'Create Account'}).click();

    await expect(page.getByText(/account created!/i)).toBeVisible();
    console.log('Account Created:', uniqueEmail);

});