import {test ,  expect} from '@playwright/test'

test("Task Inbuilt Locators", async({page})=>{
 await page.goto("https://www.automationexercise.com/login");
 

//  await page.locator('[data-qa="login-email"]').fill('ajaygupta3525@gmail.com');
//  await page.locator('[data-qa="login-password"]').fill('Ajay@123');

//  await page.getByRole('button', {name: 'Login'}).click();

//  await expect(page).not.toHaveURL(/\/login/);
//  await expect(page).toHaveURL('https://www.automationexercise.com/');

// Case 2: getBy Text() - Assert heading visible

    // const heading = page.getByText('New User Signup!');
    // await expect (heading).toBeVisible();

    // console.log('Heading Text:', await heading.textContent());


//Case 3: getByPlaceholder() Enter value in Email Field

const email = "ajay97656465@gmail.com"

const emailinput = page.getByPlaceholder('Email Address').first();
await emailinput.fill(email);

const enteredvalue = await emailinput.inputValue();
console.log("Enterd Value", enteredvalue);

expect(enteredvalue).toBe(email);

});

