import{test, expect}from'@playwright/test';

test("Radio Button and Checkbox Selection", async ({ page }) => {
    await page.goto('https://www.automationexercise.com/login');
    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.locator('[data-qa="signup-name"]').fill('John Doe');
    await page.locator('[data-qa="signup-email"]').fill('aj3525@gmail.com');
    await page.locator('[data-qa="signup-button"]').click();

    await expect(page.getByText('Enter Account Information')).toBeVisible();

           // Case 1 : Radio Button Selection
    // await page.locator('#id_gender1').check();
    // await expect(page.locator('#id_gender1')).toBeChecked();
    // await expect(page.locator('#id_gender2')).not.toBeChecked();

            // Case 2 : Checkbox Selection
    //  const newsletterCheckbox = page.locator('#newsletter');
    //  await page.mouse.wheel(0, 100);
    //  await newsletterCheckbox.check();
    //  await expect(newsletterCheckbox).toBeChecked();

        // Case 3 : Uncheck Checkbox
    // await page.locator('#optin').check();
    // await page.locator('#optin').uncheck();
    // await expect(page.locator('#optin')).not.toBeChecked();

    // Case 4 : Multiple Checkbox Handling

    // await page.mouse.wheel(0, 200);
    // const newsletterCheckbox = page.locator('#newsletter');
    // const optinCheckbox =  page.locator('#optin');

    // await newsletterCheckbox.check();
    // await optinCheckbox.check();

    // console.log('Newsletter Checkbox is checked:', await newsletterCheckbox.isChecked());
    // console.log('Optin Checkbox is checked:', await optinCheckbox.isChecked());

    // await expect(newsletterCheckbox).toBeChecked();
    // await expect(optinCheckbox).toBeChecked();

    //Case 5: Default Selection Validation

    const MrRadioButton = page.locator('#id_gender1');
    const MrsRadioButton = page.locator('#id_gender2');

    const R1Checked = await MrRadioButton.isChecked();
    const R2Checked = await MrsRadioButton.isChecked();

    console.log('Mr Radio Button is checked:', R1Checked);
    console.log('Mrs Radio Button is checked:', R2Checked);
    console.log('Any Pre Selection:', R1Checked || R2Checked);

    
 });

