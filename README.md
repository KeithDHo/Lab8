# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   1. Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   1. No because the "message" feature has many different components to it and unit tests are meant for testing a single component or part. For example, the "message" feature has two separate components, the "write" feature and the "send message" feature, which should be tested individually if using a unit test.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   1. Yes because the "max message length" is a single component or feature of a messaging application. Unit tests are meant for testing a single component, and in this case, that single component would be the "max message length" feature. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   1. It will run the tests without a browser UI.


5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

'''
beforeAll(async () => {
    await page.click('header > img')
  });
'''

