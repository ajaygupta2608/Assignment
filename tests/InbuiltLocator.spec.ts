import {test ,  expect} from '@playwright/test'

test("Task Inbuilt Locators", async({page})=>{
   // await page.goto("https://www.automationexercise.com/login");
    

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

    // const email = "ajay97656465@gmail.com"

    // const emailinput = page.getByPlaceholder('Email Address').first();
    // await emailinput.fill(email);

    // const enteredvalue = await emailinput.inputValue();
    // console.log("Enterd Value", enteredvalue);

    // expect(enteredvalue).toBe(email);

// Case 4: getByLabel() Select Radio Button

    // await page.locator('[data-qa="signup-name"]').fill('Ajay Gupta')
    // await page.locator('[data-qa="signup-email"]').fill('ajstyle97@yahoo.com')
    // await page.getByRole('button', {name : 'Signup'}).click()

    // const mrRadio = page.getByLabel('Mr.', {exact: true});
    // await mrRadio.check();

    // await expect(mrRadio).toBeChecked();

// Case 5: getByAltText() Verify Logo Visible

    await page.goto('https://www.automationexercise.com/')

    const logo = page.getByAltText('Website for automation practice');

    await expect(logo).toBeVisible();

    const src = await logo.getAttribute('src');
    console.log('Logo SRC', src);

});