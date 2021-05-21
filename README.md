# Lab8_Starter
Alexander Berryhill-Williams

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)  
*A*

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.  
*No, because this requires testing of writing and sending messages over the internet between two different users, which cannot be done within a single encapsulated component*

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters  
*Yes, because this action is probably handled by a single component and likely does not rely on other parts of the application, as it only requires checking the length of the message while it is being typed.*

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?  
*The tests will be run as normal, without launching a browser UI*

1. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?  
```js
await page.goto('http://127.0.0.1:5500');
await page.click('img[alt="settings"]');
await page.waitForTimeout(500);
```
