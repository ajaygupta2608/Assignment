import { test, expect } from '@playwright/test';

// test('Case 1: Basic Input Handling', async ({ page }) => {
//   const name = 'Ajay Gupta';
//   const email = 'ajay.gupta.test@example.com';


//   await page.goto('https://www.automationexercise.com/login');
//   await expect(page.getByText('New User Signup!')).toBeVisible();


//   const nameInput = page.locator('[data-qa="signup-name"]');
//   const emailInput = page.locator('[data-qa="signup-email"]');

//   await nameInput.fill(name);
//   await emailInput.fill(email);

//   const fetchedName = await nameInput.inputValue();
//   const fetchedEmail = await emailInput.inputValue();

//   console.log(`Fetched Name  : ${fetchedName}`);
//   console.log(`Fetched Email : ${fetchedEmail}`);

//   expect(fetchedName).toBe(name);
//   expect(fetchedEmail).toBe(email);
// });

// test("Case 2: Clear and  Re-enter Email", async ({ page }) => {
//     const firstmail = 'ajaygupta@gmaill.com';
//     const Newmail = 'yash@gmail,com';

//     await page.goto('https://www.automationexercise.com/login');
//     await page.locator('[data-qa="signup-email"]').fill(firstmail);
//     await page.locator('[data-qa="signup-email"]').clear();
//     await page.locator('[data-qa="signup-email"]').fill(Newmail);

//     const currentEmail = await page.locator('[data-qa="signup-email"]').inputValue();
//     expect(currentEmail).toBe(Newmail);
//     expect(currentEmail).not.toBe(firstmail);

// });
// test("Case 3: Fill Account information and validate", async ({ page }) => {
//     const name = 'Ajay Gupta';
//     const email = 'ajaygupta3525@gmail.com';

//     const data ={
//         password: 'Ajay@123',
//         FirstName: 'Ajay',
//         LastName: 'Gupta',
//         Address: '123 Main St',
//         City: 'Ahmedabad',
//         state: 'Gujarat',
//         Zipcode: '380001',
//         MobileNumber: '1234567890'

//     }
//     await page.route(/googlesyndication|doubleclick|adservice|googleads/, (route) => route.abort());

//     await page.goto('https://www.automationexercise.com/');
//     await expect(page).toHaveTitle(/Automation Exercise/);

//     await page.locator('//a[@href="/login"]').click();
//     await expect(page.getByText('New User Signup!')).toBeVisible();

//     await page.locator('[data-qa="signup-name"]').fill(name);
//     await page.locator('[data-qa="signup-email"]').fill(email);
//     await page.locator('[data-qa="signup-button"]').click();

//     await expect(page.getByText('Enter Account Information')).toBeVisible();

//     const password = page.locator('[data-qa="password"]');
//     const FirstName = page.locator('[data-qa="first_name"]');
//     const LastName = page.locator('[data-qa="last_name"]');
//     const Address = page.locator('[data-qa="address"]');
//     const City = page.locator('[data-qa="city"]');
//     const state = page.locator('[data-qa="state"]');
//     const Zipcode = page.locator('[data-qa="zipcode"]');
//     const MobileNumber = page.locator('[data-qa="mobile_number"]');

//     await password.fill(data.password);
//     await page.mouse.move(400, 400);
//     await FirstName.fill(data.FirstName);
//     await LastName.fill(data.LastName);
//     await page.mouse.move(400, 400);
//     await Address.fill(data.Address);
//     await City.fill(data.City);
//     await state.fill(data.state);
//     await Zipcode.fill(data.Zipcode);
//     await MobileNumber.fill(data.MobileNumber);


//     expect(await password.inputValue()).toBe(data.password);
//     expect(await FirstName.inputValue()).toBe(data.FirstName);
//     expect(await LastName.inputValue()).toBe(data.LastName);
//     expect(await Address.inputValue()).toBe(data.Address);
//     expect(await City.inputValue()).toBe(data.City);
//     expect(await state.inputValue()).toBe(data.state);
//     expect(await Zipcode.inputValue()).toBe(data.Zipcode);
//     expect(await MobileNumber.inputValue()).toBe(data.MobileNumber);
    
// });

// test("Case 4: Validate Login Email Placeholder", async ({ page }) => {
//     await page.route(/googlesyndication|doubleclick|adservice|googleads/, (route) => route.abort());

//     await page.goto('https://www.automationexercise.com/login');
//     await expect(page.getByText('Login to your account')).toBeVisible();

//     const loginEmailInput = page.locator('[data-qa="login-email"]');
//     const placeholderText = await loginEmailInput.getAttribute('placeholder');

//     expect(placeholderText).toBe('Email Address');
// });

test("Case 5: Invalid Login Email Shows Validation Error", async ({ page }) => {
    await page.route(/googlesyndication|doubleclick|adservice|googleads/, (route) => route.abort());

    await page.goto('https://www.automationexercise.com/login');
    await expect(page.getByText('Login to your account')).toBeVisible();

    const loginEmailInput = page.locator('[data-qa="login-email"]');
    const passwordInput = page.locator('[data-qa="login-password"]');

    await loginEmailInput.fill('invalidemail');
    await passwordInput.fill('Test@123');
    await page.locator('[data-qa="login-button"]').click();

    const browserValidation = await loginEmailInput.evaluate((element: HTMLInputElement) => ({
        isInvalid: !element.validity.valid,
        message: element.validationMessage
    }));

    expect(browserValidation.isInvalid).toBe(true);
    expect(browserValidation.message).not.toBe('');
});