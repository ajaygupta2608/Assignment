# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertion.spec.ts >> URL Assertion After Navigation
- Location: tests\Assertion.spec.ts:16:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "/login"
Received: "https://www.automationexercise.com/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.automationexercise.com/login"

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
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
  - insertion:
    - heading "These are topics related to the article that might interest you" [level=2]: Discover more
    - link "Secure Login Solutions"
    - link "User Authentication Service"
    - link "Account Management Software"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | // test("Page Title Validation", async ({ page }) => {
  4  | //   await page.goto("https://www.automationexercise.com/");
  5  | //   const title = await page.title();
  6  | //   console.log(`Page title: ${title}`);
  7  | //   expect(title).toContain("Automation Exercise");
  8  | // });
  9  | 
  10 | // test("Logo Visibility Assertion", async ({ page }) => {
  11 | //   await page.goto("https://www.automationexercise.com/");
  12 | //   const logo = page.locator('[alt="Website for automation practice"]');
  13 | //   await expect(logo).toBeVisible();
  14 | // });
  15 | 
  16 | test ("URL Assertion After Navigation", async ({ page }) => {
  17 | 
  18 |     await page.goto("https://www.automationexercise.com/");
  19 |     await page.locator('//a[@href="/login"]').click();
> 20 |     await expect(page).toHaveURL("/login");
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  21 | });
```