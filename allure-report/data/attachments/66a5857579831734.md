# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InputField.spec.ts >> Case 3: Fill Account information and validate
- Location: tests\InputField.spec.ts:42:1

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
    1) <input value="" required="" type="email" name="email" data-qa="login-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    2) <input value="" required="" type="email" name="email" data-qa="signup-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    3) <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/> aka getByRole('textbox', { name: 'Your email address' })

Call log:
  - waiting for getByPlaceholder('Email Address')

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - banner [ref=f1e2]:
    - generic [ref=f1e5]:
      - link [ref=f1e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f1e9]
      - list [ref=f1e12]:
        - listitem [ref=f1e13]:
          - link " Home" [ref=f1e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e15]: 
            - text: Home
        - listitem [ref=f1e16]:
          - link " Products" [ref=f1e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f1e18]: 
            - text: Products
        - listitem [ref=f1e19]:
          - link " Cart" [ref=f1e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f1e21]: 
            - text: Cart
        - listitem [ref=f1e22]:
          - link " Signup / Login" [ref=f1e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f1e24]: 
            - text: Signup / Login
        - listitem [ref=f1e25]:
          - link " Test Cases" [ref=f1e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f1e27]: 
            - text: Test Cases
        - listitem [ref=f1e28]:
          - link " API Testing" [ref=f1e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f1e30]: 
            - text: API Testing
        - listitem [ref=f1e31]:
          - link " Video Tutorials" [ref=f1e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f1e33]: 
            - text: Video Tutorials
        - listitem [ref=f1e34]:
          - link " Contact us" [ref=f1e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f1e36]: 
            - text: Contact us
  - generic [ref=f1e39]:
    - generic [ref=f1e41]:
      - heading "Login to your account" [level=2] [ref=f1e42]
      - generic [ref=f1e43]:
        - textbox "Email Address" [ref=f1e44]
        - textbox "Password" [ref=f1e45]
        - button "Login" [ref=f1e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f1e48]
    - generic [ref=f1e50]:
      - heading "New User Signup!" [level=2] [ref=f1e51]
      - generic [ref=f1e52]:
        - textbox "Name" [active] [ref=f1e53]: Ajay Gupta
        - textbox "Email Address" [ref=f1e54]
        - button "Signup" [ref=f1e55] [cursor=pointer]
  - contentinfo [ref=f1e56]:
    - generic [ref=f1e61]:
      - heading "Subscription" [level=2] [ref=f1e62]
      - generic [ref=f1e63]:
        - textbox "Your email address" [ref=f1e64]
        - button "" [ref=f1e65] [cursor=pointer]
        - paragraph [ref=f1e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f1e71]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // test('Case 1: Basic Input Handling', async ({ page }) => {
  4  | //   const name = 'Ajay Gupta';
  5  | //   const email = 'ajay.gupta.test@example.com';
  6  | 
  7  | 
  8  | //   await page.goto('https://www.automationexercise.com/login');
  9  | //   await expect(page.getByText('New User Signup!')).toBeVisible();
  10 | 
  11 | 
  12 | //   const nameInput = page.locator('[data-qa="signup-name"]');
  13 | //   const emailInput = page.locator('[data-qa="signup-email"]');
  14 | 
  15 | //   await nameInput.fill(name);
  16 | //   await emailInput.fill(email);
  17 | 
  18 | //   const fetchedName = await nameInput.inputValue();
  19 | //   const fetchedEmail = await emailInput.inputValue();
  20 | 
  21 | //   console.log(`Fetched Name  : ${fetchedName}`);
  22 | //   console.log(`Fetched Email : ${fetchedEmail}`);
  23 | 
  24 | //   expect(fetchedName).toBe(name);
  25 | //   expect(fetchedEmail).toBe(email);
  26 | // });
  27 | 
  28 | // test("Case 2: Clear and  Re-enter Email", async ({ page }) => {
  29 | //     const firstmail = 'ajaygupta@gmaill.com';
  30 | //     const Newmail = 'yash@gmail,com';
  31 | 
  32 | //     await page.goto('https://www.automationexercise.com/login');
  33 | //     await page.locator('[data-qa="signup-email"]').fill(firstmail);
  34 | //     await page.locator('[data-qa="signup-email"]').clear();
  35 | //     await page.locator('[data-qa="signup-email"]').fill(Newmail);
  36 | 
  37 | //     const currentEmail = await page.locator('[data-qa="signup-email"]').inputValue();
  38 | //     expect(currentEmail).toBe(Newmail);
  39 | //     expect(currentEmail).not.toBe(firstmail);
  40 | 
  41 | // });
  42 | test("Case 3: Fill Account information and validate", async ({ page }) => {
  43 |     const name = 'Ajay Gupta';
  44 |     const email = 'ajaygupta3525@gmail.com';
  45 | 
  46 |     const data ={
  47 |         password: 'Ajay@123',
  48 |         FirstName: 'Ajay',
  49 |         LastName: 'Gupta',
  50 |         Address: '123 Main St',
  51 |         City: 'Ahmedabad',
  52 |         state: 'Gujarat',
  53 |         Zipcode: '380001',
  54 |         MobileNumber: '1234567890'
  55 | 
  56 |     }
  57 |     await page.route(/googlesyndication|doubleclick|adservice|googleads/, (route) => route.abort());
  58 | 
  59 |     await page.goto('https://www.automationexercise.com/');
  60 |     await expect(page).toHaveTitle(/Automation Exercise/);
  61 |     
  62 |     await page.locator('//a[@href="/login"]').click();
  63 |     await expect(page.getByText('New User Signup!')).toBeVisible();
  64 | 
  65 |     await page.locator('[data-qa="signup-name"]').fill(name);
> 66 |     await page.getByPlaceholder('Email Address').fill(email);
     |                                                  ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
  67 |     await page.locator('[data-qa="signup-button"]').click();
  68 | 
  69 |     await expect(page.getByText('Enter Account Information')).toBeVisible();
  70 | 
  71 |     const password = page.locator('[data-qa="password"]');
  72 |     const FirstName = page.locator('[data-qa="first_name"]');
  73 |     const LastName = page.locator('[data-qa="last_name"]');
  74 |     const Address = page.locator('[data-qa="address"]');
  75 |     const City = page.locator('[data-qa="city"]');
  76 |     const state = page.locator('[data-qa="state"]');
  77 |     const Zipcode = page.locator('[data-qa="zipcode"]');
  78 |     const MobileNumber = page.locator('[data-qa="mobile_number"]');
  79 | 
  80 | 
  81 |     expect(await password.inputValue()).toBe(data.password);
  82 |     expect(await FirstName.inputValue()).toBe(data.FirstName);
  83 |     expect(await LastName.inputValue()).toBe(data.LastName);
  84 |     expect(await Address.inputValue()).toBe(data.Address);
  85 |     expect(await City.inputValue()).toBe(data.City);
  86 |     expect(await state.inputValue()).toBe(data.state);
  87 |     expect(await Zipcode.inputValue()).toBe(data.Zipcode);
  88 |     expect(await MobileNumber.inputValue()).toBe(data.MobileNumber);
  89 | 
  90 | });
```