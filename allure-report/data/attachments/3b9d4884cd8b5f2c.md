# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RadioCheck.spec.ts >> Radio Button and Checkbox Selection
- Location: tests\RadioCheck.spec.ts:3:1

# Error details

```
TypeError: page.locator(...).toBeChecked is not a function
```

# Page snapshot

```yaml
- generic [ref=f11e1]:
  - banner [ref=f11e2]:
    - generic [ref=f11e5]:
      - link [ref=f11e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=f11e9]
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
    - generic [ref=f11e41]:
      - heading "Enter Account Information" [level=2] [ref=f11e42]
      - generic [ref=f11e43]:
        - generic [ref=f11e44]:
          - generic [ref=f11e45]: Title
          - generic [ref=f11e47]:
            - radio "Mr." [ref=f11e49]
            - text: Mr.
          - generic [ref=f11e51]:
            - radio "Mrs." [ref=f11e53]
            - text: Mrs.
        - generic [ref=f11e54]:
          - generic [ref=f11e55]:
            - text: Name
            - superscript [ref=f11e56]: "*"
          - textbox "Name *" [ref=f11e57]: John Doe
        - generic [ref=f11e58]:
          - generic [ref=f11e59]:
            - text: Email
            - superscript [ref=f11e60]: "*"
          - textbox "Email *" [disabled] [ref=f11e61]: aj3525@gmail.com
        - generic [ref=f11e62]:
          - generic [ref=f11e63]:
            - text: Password
            - superscript [ref=f11e64]: "*"
          - textbox "Password *" [ref=f11e65]
        - generic [ref=f11e66]:
          - generic [ref=f11e67]: Date of Birth
          - generic [ref=f11e68]:
            - combobox [ref=f11e71]:
              - option "Day" [selected]
              - option "1"
              - option "2"
              - option "3"
              - option "4"
              - option "5"
              - option "6"
              - option "7"
              - option "8"
              - option "9"
              - option "10"
              - option "11"
              - option "12"
              - option "13"
              - option "14"
              - option "15"
              - option "16"
              - option "17"
              - option "18"
              - option "19"
              - option "20"
              - option "21"
              - option "22"
              - option "23"
              - option "24"
              - option "25"
              - option "26"
              - option "27"
              - option "28"
              - option "29"
              - option "30"
              - option "31"
            - combobox [ref=f11e74]:
              - option "Month" [selected]
              - option "January"
              - option "February"
              - option "March"
              - option "April"
              - option "May"
              - option "June"
              - option "July"
              - option "August"
              - option "September"
              - option "October"
              - option "November"
              - option "December"
            - combobox [ref=f11e77]:
              - option "Year" [selected]
              - option "2021"
              - option "2020"
              - option "2019"
              - option "2018"
              - option "2017"
              - option "2016"
              - option "2015"
              - option "2014"
              - option "2013"
              - option "2012"
              - option "2011"
              - option "2010"
              - option "2009"
              - option "2008"
              - option "2007"
              - option "2006"
              - option "2005"
              - option "2004"
              - option "2003"
              - option "2002"
              - option "2001"
              - option "2000"
              - option "1999"
              - option "1998"
              - option "1997"
              - option "1996"
              - option "1995"
              - option "1994"
              - option "1993"
              - option "1992"
              - option "1991"
              - option "1990"
              - option "1989"
              - option "1988"
              - option "1987"
              - option "1986"
              - option "1985"
              - option "1984"
              - option "1983"
              - option "1982"
              - option "1981"
              - option "1980"
              - option "1979"
              - option "1978"
              - option "1977"
              - option "1976"
              - option "1975"
              - option "1974"
              - option "1973"
              - option "1972"
              - option "1971"
              - option "1970"
              - option "1969"
              - option "1968"
              - option "1967"
              - option "1966"
              - option "1965"
              - option "1964"
              - option "1963"
              - option "1962"
              - option "1961"
              - option "1960"
              - option "1959"
              - option "1958"
              - option "1957"
              - option "1956"
              - option "1955"
              - option "1954"
              - option "1953"
              - option "1952"
              - option "1951"
              - option "1950"
              - option "1949"
              - option "1948"
              - option "1947"
              - option "1946"
              - option "1945"
              - option "1944"
              - option "1943"
              - option "1942"
              - option "1941"
              - option "1940"
              - option "1939"
              - option "1938"
              - option "1937"
              - option "1936"
              - option "1935"
              - option "1934"
              - option "1933"
              - option "1932"
              - option "1931"
              - option "1930"
              - option "1929"
              - option "1928"
              - option "1927"
              - option "1926"
              - option "1925"
              - option "1924"
              - option "1923"
              - option "1922"
              - option "1921"
              - option "1920"
              - option "1919"
              - option "1918"
              - option "1917"
              - option "1916"
              - option "1915"
              - option "1914"
              - option "1913"
              - option "1912"
              - option "1911"
              - option "1910"
              - option "1909"
              - option "1908"
              - option "1907"
              - option "1906"
              - option "1905"
              - option "1904"
              - option "1903"
              - option "1902"
              - option "1901"
              - option "1900"
        - generic [ref=f11e78]:
          - checkbox "Sign up for our newsletter!" [checked] [ref=f11e79]
          - text: Sign up for our newsletter!
        - generic [ref=f11e80]:
          - checkbox "Receive special offers from our partners!" [checked] [active] [ref=f11e81]
          - text: Receive special offers from our partners!
        - heading "Address Information" [level=2] [ref=f11e82]
        - paragraph [ref=f11e83]:
          - generic [ref=f11e84]:
            - text: First name
            - superscript [ref=f11e85]: "*"
          - textbox "First name *" [ref=f11e86]
        - paragraph [ref=f11e87]:
          - generic [ref=f11e88]:
            - text: Last name
            - superscript [ref=f11e89]: "*"
          - textbox "Last name *" [ref=f11e90]
        - paragraph [ref=f11e91]:
          - generic [ref=f11e92]: Company
          - textbox "Company" [ref=f11e93]
        - paragraph [ref=f11e94]:
          - generic [ref=f11e95]:
            - text: Address
            - superscript [ref=f11e96]: "*"
            - text: (Street address, P.O. Box, Company name, etc.)
          - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=f11e97]
        - paragraph [ref=f11e98]:
          - generic [ref=f11e99]: Address 2
          - textbox "Address 2" [ref=f11e100]
        - paragraph [ref=f11e101]:
          - generic [ref=f11e102]:
            - text: Country
            - superscript [ref=f11e103]: "*"
          - combobox "Country *" [ref=f11e104]:
            - option "India" [selected]
            - option "United States"
            - option "Canada"
            - option "Australia"
            - option "Israel"
            - option "New Zealand"
            - option "Singapore"
        - paragraph [ref=f11e105]:
          - generic [ref=f11e106]:
            - text: State
            - superscript [ref=f11e107]: "*"
          - textbox "State *" [ref=f11e108]
        - paragraph [ref=f11e109]:
          - generic [ref=f11e110]:
            - text: City
            - superscript [ref=f11e111]: "*"
          - textbox "City * Zipcode *" [ref=f11e112]
        - paragraph [ref=f11e113]:
          - generic [ref=f11e114]:
            - text: Zipcode
            - superscript [ref=f11e115]: "*"
          - textbox [ref=f11e116]
        - paragraph [ref=f11e117]:
          - generic [ref=f11e118]:
            - text: Mobile Number
            - superscript [ref=f11e119]: "*"
          - textbox "Mobile Number *" [ref=f11e120]
        - button "Create Account" [ref=f11e121] [cursor=pointer]
    - generic:
      - insertion:
        - iframe [ref=f11e123]
    - insertion [ref=f11e125]:
      - generic [ref=f11e128]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=f11e130]: Discover more
        - link "Browse Reference" [ref=f11e131] [cursor=pointer]
        - link "Secure Networks" [ref=f11e136] [cursor=pointer]
        - link "Try Dev Tools" [ref=f11e141] [cursor=pointer]
  - generic:
    - insertion:
      - iframe [ref=f11e147]
  - contentinfo [ref=f11e148]:
    - generic [ref=f11e153]:
      - heading "Subscription" [level=2] [ref=f11e154]
      - generic [ref=f11e155]:
        - textbox "Your email address" [ref=f11e156]
        - button "" [ref=f11e157] [cursor=pointer]
        - paragraph [ref=f11e159]:
          - text: Get the most recent updates from our site and be updated your self...
          - link "Browse Reference" [ref=f11e160] [cursor=pointer]
    - paragraph [ref=f11e167]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f11e169]:
    - generic [ref=f11e172]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f11e174]: Discover more
      - link "Try Cloud Tools" [ref=f11e175] [cursor=pointer]
      - link "Learn to Code" [ref=f11e180] [cursor=pointer]
      - link "File a Trademark" [ref=f11e185] [cursor=pointer]
```

# Test source

```ts
  1  | import{test, expect}from'@playwright/test';
  2  | 
  3  | test("Radio Button and Checkbox Selection", async ({ page }) => {
  4  |     await page.goto('https://www.automationexercise.com/login');
  5  |     await expect(page.getByText('New User Signup!')).toBeVisible();
  6  | 
  7  |     await page.locator('[data-qa="signup-name"]').fill('John Doe');
  8  |     await page.locator('[data-qa="signup-email"]').fill('aj3525@gmail.com');
  9  |     await page.locator('[data-qa="signup-button"]').click();
  10 | 
  11 |     await expect(page.getByText('Enter Account Information')).toBeVisible();
  12 | 
  13 |            // Case 1 : Radio Button Selection
  14 |     // await page.locator('#id_gender1').check();
  15 |     // await expect(page.locator('#id_gender1')).toBeChecked();
  16 |     // await expect(page.locator('#id_gender2')).not.toBeChecked();
  17 | 
  18 |             // Case 2 : Checkbox Selection
  19 |     //  const newsletterCheckbox = page.locator('#newsletter');
  20 |     //  await page.mouse.wheel(0, 100);
  21 |     //  await newsletterCheckbox.check();
  22 |     //  await expect(newsletterCheckbox).toBeChecked();
  23 | 
  24 |         // Case 3 : Uncheck Checkbox
  25 |     // await page.locator('#optin').check();
  26 |     // await page.locator('#optin').uncheck();
  27 |     // await expect(page.locator('#optin')).not.toBeChecked();
  28 | 
  29 |     // Case 4 : Multiple Checkbox Handling
  30 |     await page.locator('#newsletter').check();
  31 |     await page.locator('#optin').check();
  32 | 
  33 |     console.log('Newsletter Checkbox is checked:', await page.locator('#newsletter').isChecked());
  34 |     console.log('Optin Checkbox is checked:', await page.locator('#optin').isChecked());
  35 | 
> 36 |     await page.locator('#newsletter').toBeChecked();
     |                                       ^ TypeError: page.locator(...).toBeChecked is not a function
  37 |     await page.locator('#optin').toBeChecked();
  38 | 
  39 |  });
  40 | 
  41 | 
```