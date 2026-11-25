import { test, expect } from "@playwright/test";

// test("Page Title Validation", async ({ page }) => {
//   await page.goto("https://www.automationexercise.com/");
//   const title = await page.title();
//   console.log(`Page title: ${title}`);
//   expect(title).toContain("Automation Exercise");
// });

// test("Logo Visibility Assertion", async ({ page }) => {
//   await page.goto("https://www.automationexercise.com/");
//   const logo = page.locator('[alt="Website for automation practice"]');
//   await expect(logo).toBeVisible();
// });

// test ("URL Assertion After Navigation", async ({ page }) => {

//     await page.goto("https://www.automationexercise.com/");
//     await page.locator('//a[@href="/login"]').click();
//     await expect(page).toHaveURL(/\/login/);
// });

// test("Assertion on signup heading", async ({ page }) => {
//   await page.goto("https://www.automationexercise.com/login");
//   const signupHeading = page.getByRole("heading", {
//     name: "New User Signup!",
//     exact: true,
//   });
//   const headingText = await signupHeading.textContent();

//   expect(headingText?.trim()).toBe("New User Signup!");
// });

test("Invalid login displays an error message", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/login");

  const loginForm = page.locator(".login-form");
  await loginForm.getByPlaceholder("Email Address").fill("invalid@example.com");
  await loginForm.getByPlaceholder("Password").fill("invalid-password");
  await loginForm.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText("Your email or password is incorrect!", { exact: true }),
  ).toBeVisible();
});
