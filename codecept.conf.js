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
            waitForTimeout: 30000,
      timeout: 30000,
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
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