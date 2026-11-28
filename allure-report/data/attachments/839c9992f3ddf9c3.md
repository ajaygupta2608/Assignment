# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InbuiltLocator.spec.ts >> Case 1 getByRole
- Location: tests\InbuiltLocator.spec.ts:3:1

# Error details

```
Error: locator.fill: Unexpected token "=" while parsing css selector "#data-qa="login-email"". Did you mean to CSS.escape it?
Call log:
  - waiting for #data-qa="login-email"

```

# Page snapshot

```yaml
- generic [active] [ref=f11e1]:
  - banner [ref=f11e2]:
    - generic [ref=f11e5]:
      - link [ref=f11e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f11e9]
      - list [ref=f11e12]:
        - listitem [ref=f11e13]:
          - link " Home" [ref=f11e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f11e15]: 
            - text: Home
        - listitem [ref=f11e16]:
          - link " Products" [ref=f11e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f11e18]: 
            - text: Products
        - listitem [ref=f11e19]:
          - link " Cart" [ref=f11e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f11e21]: 
            - text: Cart
        - listitem [ref=f11e22]:
          - link " Signup / Login" [ref=f11e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f11e24]: 
            - text: Signup / Login
        - listitem [ref=f11e25]:
          - link " Test Cases" [ref=f11e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f11e27]: 
            - text: Test Cases
        - listitem [ref=f11e28]:
          - link " API Testing" [ref=f11e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f11e30]: 
            - text: API Testing
        - listitem [ref=f11e31]:
          - link " Video Tutorials" [ref=f11e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f11e33]: 
            - text: Video Tutorials
        - listitem [ref=f11e34]:
          - link " Contact us" [ref=f11e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f11e36]: 
            - text: Contact us
  - generic [ref=f11e38]:
    - generic [ref=f11e39]:
      - generic [ref=f11e41]:
        - heading "Login to your account" [level=2] [ref=f11e42]
        - generic [ref=f11e43]:
          - textbox "Email Address" [ref=f11e44]
          - textbox "Password" [ref=f11e45]
          - button "Login" [ref=f11e46] [cursor=pointer]
      - heading "OR" [level=2] [ref=f11e48]
      - generic [ref=f11e50]:
        - heading "New User Signup!" [level=2] [ref=f11e51]
        - generic [ref=f11e52]:
          - textbox "Name" [ref=f11e53]
          - textbox "Email Address" [ref=f11e54]
          - button "Signup" [ref=f11e55] [cursor=pointer]
    - insertion [ref=f11e57]:
      - generic [ref=f11e60]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=f11e62]: Discover more
        - link "Secure Login Solutions" [ref=f11e63] [cursor=pointer]
        - link "User Authentication Service" [ref=f11e68] [cursor=pointer]
        - link "Account Management Software" [ref=f11e73] [cursor=pointer]
  - contentinfo [ref=f11e78]:
    - generic [ref=f11e83]:
      - heading "Subscription" [level=2] [ref=f11e84]
      - generic [ref=f11e85]:
        - textbox "Your email address" [ref=f11e86]
        - button "" [ref=f11e87] [cursor=pointer]
        - paragraph [ref=f11e89]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f11e93]:
      - text: Copyright © 2021 All rights reserved
      - link "File a Trademark" [ref=f11e94] [cursor=pointer]
  - text: 
  - insertion [ref=f11e99]:
    - generic [ref=f11e102]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f11e104]: Discover more
      - link "Automation Testing Tools" [ref=f11e105] [cursor=pointer]
      - link "Test Automation Consulting" [ref=f11e110] [cursor=pointer]
      - link "Automation Framework Development" [ref=f11e115] [cursor=pointer]
```

# Test source

```ts
  1  | import {test ,  expect} from '@playwright/test'
  2  | 
  3  | test("Case 1 getByRole", async({page})=>{
  4  |  await page.goto("https://www.automationexercise.com/login");
  5  |  await page.locator('//a[@href="/login"]').click();
  6  | 
> 7  |  await page.locator('#data-qa="login-email"').fill ('ajaygupta@gmail.com');
     |                                               ^ Error: locator.fill: Unexpected token "=" while parsing css selector "#data-qa="login-email"". Did you mean to CSS.escape it?
  8  |  await page.locator('#data-qa="login-password"').fill('Ajay@123');
  9  | 
  10 |  await page.getByRole('button', {name: 'Login'}).click();
  11 | 
  12 |  await expect(page).not.toHaveURL(/\/login/);
  13 |  await expect(page).toHaveURL('https://www.automationexercise.com/');
  14 | 
  15 | 
  16 | });
```