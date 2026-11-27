# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> Case 5: Select all options from dynamically
- Location: tests\Dropdown.spec.ts:65:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.stadsolution.com/automation-testing-practice/
Call log:
  - navigating to "https://www.stadsolution.com/automation-testing-practice/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | // test("Case 1: Select single country from dropdown", async ({ page }) => {
  4  | //     await page.goto('https://www.stadsolution.com/automation-testing-practice/');
  5  | 
  6  | //     const countryDropdown = page.locator('#f-country');
  7  | //     await countryDropdown.selectOption('India');
  8  | //     const selectedCountry = await countryDropdown.inputValue();
  9  | //     expect(selectedCountry).toBe('India');
  10 | // });
  11 | 
  12 | // test("Case 2: List and verify country dropdown options", async ({ page }) => {
  13 | //     await page.goto('https://www.stadsolution.com/automation-testing-practice/');
  14 | 
  15 | //     await page.mouse.wheel(0, 250);
  16 | 
  17 | //     const options = (await page.locator('#f-country option').allTextContents())
  18 | //         .map((text) => text.trim());
  19 | 
  20 | //     options.forEach((text) => console.log(text));
  21 | 
  22 | //     expect(options).toContain('India');
  23 | //     expect(options).toContain('United States');
  24 | // });
  25 | 
  26 | // test ("Case 3: Select multiple countries from dropdown", async ({ page }) => {
  27 | //     await page.goto('https://www.stadsolution.com/automation-testing-practice/');
  28 | //     await page.mouse.wheel(0, 300);
  29 | 
  30 | //     const toolsdropdown = page.locator('#f-colors');
  31 | //     await toolsdropdown.selectOption(['Selenium', 'Playwright', 'Postman']);
  32 | 
  33 | //     const selected = await toolsdropdown.locator('option:checked').allTextContents();
  34 | //   console.log('Selected:', selected);
  35 | 
  36 |   
  37 | //   expect(selected).toContain('Selenium');
  38 | //   expect(selected).toContain('Playwright');
  39 | //   expect(selected).toContain('Postman');
  40 | //   expect(selected).toHaveLength(3);
  41 | 
  42 | // });
  43 | 
  44 | // test ("Case 4: Deselect option from multiple select dropdown", async ({ page }) => {
  45 | 
  46 | //   await page.goto('https://www.stadsolution.com/automation-testing-practice/');
  47 | //   await page.mouse.wheel(0, 300);
  48 | 
  49 | //   const toolsdropdown = page.locator('#f-colors');
  50 | //   await toolsdropdown.selectOption(['Selenium', 'Playwright', 'Cypress']);
  51 | 
  52 | //   console.log("Before", await toolsdropdown.locator('option:checked').allTextContents());
  53 | 
  54 | //   await toolsdropdown.selectOption(['Selenium', 'Playwright']); // Deselect Cypress by not including it in the selection  
  55 | 
  56 | 
  57 | //   const selected = await toolsdropdown.locator('option:checked').allTextContents();
  58 | //   console.log('After Selected:', selected);
  59 | 
  60 | //   expect(selected).toEqual(['Selenium', 'Playwright']);
  61 | //   expect(selected).not.toContain('Cypress');
  62 |  
  63 | // });
  64 | 
  65 | test("Case 5: Select all options from dynamically", async ({ page }) => {
  66 | 
> 67 |   await page.goto('https://www.stadsolution.com/automation-testing-practice/');
     |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.stadsolution.com/automation-testing-practice/
  68 |   await page.mouse.wheel(0, 300);
  69 | 
  70 |   const toolsdropdown = page.getByLabel('Testing Tools');
  71 |   //await toolsdropdown.scrollIntoViewIfNeeded();
  72 | 
  73 |   const alloptions = toolsdropdown.locator('option');
  74 |   const optionTexts = await alloptions.allTextContents();
  75 |   const optionValues = await alloptions.evaluateAll(opts =>
  76 |     opts.map(o => (o as HTMLOptionElement).value)
  77 |   );
  78 |   console.log('Available Options:',optionTexts);
  79 | 
  80 |    await toolsdropdown.selectOption(optionValues);
  81 | 
  82 |   // Fetch selected options
  83 |   const selectedTexts = await toolsdropdown.locator('option:checked').allTextContents();
  84 |   console.log('Selected options:', selectedTexts);
  85 | 
  86 |   // Assert selected count equals total available options
  87 |   expect(selectedTexts.length).toBe(optionTexts.length);
  88 |   await expect(toolsdropdown.locator('option:checked')).toHaveCount(optionTexts.length);
  89 | 
  90 |   
  91 | });
```