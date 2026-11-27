# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RadioCheck.spec.ts >> Case 3: Uncheck  Checkbox
- Location: tests\RadioCheck.spec.ts:34:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Enter Account Information')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Enter Account Information') with timeout 5000ms
  - waiting for getByText('Enter Account Information')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": John Doe
- textbox "Email Address": shiv@gmail.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph:
    - text: Get the most recent updates from our site and be updated your self...
    - link "Browse Reference":
      - img
      - text: Browse Reference
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Secure Networks"
  - link "Try Cloud Tools"
  - link "Try Dev Tools"
```

# Test source

```ts
  1  | import{test, expect}from'@playwright/test';
  2  | 
  3  | // test("case 1: Radio Button Selection", async ({ page }) => {
  4  | //     await page.goto('https://www.automationexercise.com/login');
  5  | //     await expect(page.getByText('New User Signup!')).toBeVisible();
  6  | 
  7  | //     await page.locator('[data-qa="signup-name"]').fill('John Doe');
  8  | //     await page.locator('[data-qa="signup-email"]').fill('aj3525@gmail.com');
  9  | //     await page.locator('[data-qa="signup-button"]').click();
  10 | 
  11 | //     await expect(page.getByText('Enter Account Information')).toBeVisible();
  12 | 
  13 | //     await page.locator('#id_gender1').check();
  14 | //     await expect(page.locator('#id_gender1')).toBeChecked();
  15 | //     await expect(page.locator('#id_gender2')).not.toBeChecked();
  16 | // });
  17 | 
  18 | // test("Case 2: Checkbox Selection", async ({ page }) => {
  19 | //     await page.goto('https://www.automationexercise.com/login');
  20 | //     await expect(page.getByText('New User Signup!')).toBeVisible();
  21 | 
  22 | //     await page.locator('[data-qa="signup-name"]').fill('John Doe');
  23 | //     await page.locator('[data-qa="signup-email"]').fill('yp26@yahoomail.com');
  24 | //     await page.locator('[data-qa="signup-button"]').click();
  25 | 
  26 | //     await expect(page.getByText('Enter Account Information')).toBeVisible();
  27 | 
  28 | //     const newsletterCheckbox = page.locator('#newsletter');
  29 | //      await page.mouse.wheel(0, 100);
  30 | //      await newsletterCheckbox.check();
  31 | //      await expect(newsletterCheckbox).toBeChecked();
  32 | // });
  33 | 
  34 | test("Case 3: Uncheck  Checkbox", async ({ page }) => {
  35 |     await page.goto('https://www.automationexercise.com/login');
  36 | 
  37 |     await page.locator('[data-qa="signup-name"]').fill('John Doe');
  38 |     await page.locator('[data-qa="signup-email"]').fill('shiv@gmail.com');
  39 |     await page.locator('[data-qa="signup-button"]').click();
  40 | 
> 41 |     await expect(page.getByText('Enter Account Information')).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  42 | 
  43 |     await page.locator('#optin').check();
  44 |     await page.locator('#optin').uncheck();
  45 |     await expect(page.locator('#optin')).not.toBeChecked();
  46 | });
```