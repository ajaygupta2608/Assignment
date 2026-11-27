import {test, expect} from '@playwright/test';

// test("Case 1: Select single country from dropdown", async ({ page }) => {
//     await page.goto('https://www.stadsolution.com/automation-testing-practice/');

//     const countryDropdown = page.locator('#f-country');
//     await countryDropdown.selectOption('India');
//     const selectedCountry = await countryDropdown.inputValue();
//     expect(selectedCountry).toBe('India');
// });

// test("Case 2: List and verify country dropdown options", async ({ page }) => {
//     await page.goto('https://www.stadsolution.com/automation-testing-practice/');

//     await page.mouse.wheel(0, 250);

//     const options = (await page.locator('#f-country option').allTextContents())
//         .map((text) => text.trim());

//     options.forEach((text) => console.log(text));

//     expect(options).toContain('India');
//     expect(options).toContain('United States');
// });

// test ("Case 3: Select multiple countries from dropdown", async ({ page }) => {
//     await page.goto('https://www.stadsolution.com/automation-testing-practice/');
//     await page.mouse.wheel(0, 300);

//     const toolsdropdown = page.locator('#f-colors');
//     await toolsdropdown.selectOption(['Selenium', 'Playwright', 'Postman']);

//     const selected = await toolsdropdown.locator('option:checked').allTextContents();
//   console.log('Selected:', selected);

  
//   expect(selected).toContain('Selenium');
//   expect(selected).toContain('Playwright');
//   expect(selected).toContain('Postman');
//   expect(selected).toHaveLength(3);

// });

// test ("Case 4: Deselect option from multiple select dropdown", async ({ page }) => {

//   await page.goto('https://www.stadsolution.com/automation-testing-practice/');
//   await page.mouse.wheel(0, 300);

//   const toolsdropdown = page.locator('#f-colors');
//   await toolsdropdown.selectOption(['Selenium', 'Playwright', 'Cypress']);

//   console.log("Before", await toolsdropdown.locator('option:checked').allTextContents());

//   await toolsdropdown.selectOption(['Selenium', 'Playwright']); // Deselect Cypress by not including it in the selection  


//   const selected = await toolsdropdown.locator('option:checked').allTextContents();
//   console.log('After Selected:', selected);

//   expect(selected).toEqual(['Selenium', 'Playwright']);
//   expect(selected).not.toContain('Cypress');
 
// });

test("Case 5: Select all options from dynamically", async ({ page }) => {

  await page.goto('https://www.stadsolution.com/automation-testing-practice/');
  await page.mouse.wheel(0, 300);

  const toolsdropdown = page.getByLabel('Testing Tools');
  //await toolsdropdown.scrollIntoViewIfNeeded();

  const alloptions = toolsdropdown.locator('option');
  const optionTexts = await alloptions.allTextContents();
  const optionValues = await alloptions.evaluateAll(opts =>
    opts.map(o => (o as HTMLOptionElement).value)
  );
  console.log('Available Options:',optionTexts);

   await toolsdropdown.selectOption(optionValues);

  // Fetch selected options
  const selectedTexts = await toolsdropdown.locator('option:checked').allTextContents();
  console.log('Selected options:', selectedTexts);

  // Assert selected count equals total available options
  expect(selectedTexts.length).toBe(optionTexts.length);
  await expect(toolsdropdown.locator('option:checked')).toHaveCount(optionTexts.length);

  
});