# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertion.spec.ts >> Invalid login displays an error message
- Location: tests\Assertion.spec.ts:34:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f10e1]:
  - banner [ref=f10e2]:
    - generic [ref=f10e5]:
      - link [ref=f10e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f10e9]
      - list [ref=f10e12]:
        - listitem [ref=f10e13]:
          - link " Home" [ref=f10e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f10e15]: 
            - text: Home
        - listitem [ref=f10e16]:
          - link " Products" [ref=f10e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f10e18]: 
            - text: Products
        - listitem [ref=f10e19]:
          - link " Cart" [ref=f10e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f10e21]: 
            - text: Cart
        - listitem [ref=f10e22]:
          - link " Signup / Login" [ref=f10e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f10e24]: 
            - text: Signup / Login
        - listitem [ref=f10e25]:
          - link " Test Cases" [ref=f10e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f10e27]: 
            - text: Test Cases
        - listitem [ref=f10e28]:
          - link " API Testing" [ref=f10e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f10e30]: 
            - text: API Testing
        - listitem [ref=f10e31]:
          - link " Video Tutorials" [ref=f10e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f10e33]: 
            - text: Video Tutorials
        - listitem [ref=f10e34]:
          - link " Contact us" [ref=f10e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f10e36]: 
            - text: Contact us
  - generic [ref=f10e39]:
    - generic [ref=f10e41]:
      - heading "Login to your account" [level=2] [ref=f10e42]
      - generic [ref=f10e43]:
        - textbox "Email Address" [ref=f10e44]: invalid@example.com
        - textbox "Password" [ref=f10e45]: invalid-password
        - paragraph [ref=f10e46]: Your email or password is incorrect!
        - button "Login" [ref=f10e47] [cursor=pointer]
    - heading "OR" [level=2] [ref=f10e49]
    - generic [ref=f10e51]:
      - heading "New User Signup!" [level=2] [ref=f10e52]
      - generic [ref=f10e53]:
        - textbox "Name" [ref=f10e54]
        - textbox "Email Address" [ref=f10e55]
        - button "Signup" [ref=f10e56] [cursor=pointer]
  - contentinfo [ref=f10e57]:
    - generic [ref=f10e62]:
      - heading "Subscription" [level=2] [ref=f10e63]
      - generic [ref=f10e64]:
        - textbox "Your email address" [ref=f10e65]
        - button "" [ref=f10e66] [cursor=pointer]
        - paragraph [ref=f10e68]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f10e72]:
      - text: Copyright © 2021 All rights reserved
      - link "File a Trademark" [ref=f10e73] [cursor=pointer]
  - text: 
  - insertion [ref=f10e78]:
    - generic [ref=f10e81]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f10e83]: Discover more
      - link "Secure Login Solutions" [ref=f10e84] [cursor=pointer]
      - link "User Authentication Service" [ref=f10e89] [cursor=pointer]
      - link "Account Management Software" [ref=f10e94] [cursor=pointer]
```