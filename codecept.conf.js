const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
      /*When to consider navigation succeeded, defaults to load.
      Given an array of event strings, navigation is considered to be successful
      after all events have been fired. Events can be either:
      load - consider navigation to be finished when the load event is fired.
      domcontentloaded - consider navigation to be finished when the DOMContentLoaded event is fired.
      networkidle - consider navigation to be finished when there are no network connections for at least 500 ms.*/
      waitForTimeout: 10000,   //in case if 1 second is not enough for response
      timeout: 10000,
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    // http://automationpractice.com/index.php
    authPage: './pages/auth.js',
    // http://automationpractice.com/index.php?controller=authentication&back=my-account
    createAccountPage: './pages/createAccount.js',
    // http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation
    userData: './data/user.js',

    itemOrderPage: './pages/itemOrder.js', //HomeWork 3
  },
  bootstrap: null,
  mocha: {},
  name: 'JS_Courses'
}