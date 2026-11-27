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
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]
        - paragraph [ref=e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Secure Login Solutions" [ref=e79] [cursor=pointer]
      - link "User Authentication Service" [ref=e84] [cursor=pointer]
      - link "Account Management Software" [ref=e89] [cursor=pointer]
```

# Test source

```ts
  1  | import {test ,  expect} from '@playwright/test'
  2  | 
  3  | test("Case 1 getByRole", async({page})=>{
  4  |  await page.goto("https://www.automationexercise.com/login");
  5  |  
  6  | 
> 7  |  await page.locator('#data-qa="login-email"').fill('ajaygupta@gmail.com');
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