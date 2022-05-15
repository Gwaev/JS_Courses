const ReadFile = require('./helper/read_file');

let loginsArray =  ReadFile.getData();

Feature("Store");

/*Scenario.skip(
  "test something",
  ({ homePage, authPage, createAccountPage, userData }) => {
    homePage.openStore();
    homePage.clickSingIn();
    authPage.fillNewUserEmail(Date.now() + "@test.com");
    authPage.clickCreateAnAccount();
    createAccountPage.fillNewUserForm(userData);
    createAccountPage.clickRegisterButton(); //I.click({css: '#submitAccount'});  // don't forget to add 'I' to the callback

    pause(); // I know that this string not for GIT ;)
  }
).tag('@newRegistration');*/

Before(({homePage, authPage}) => {
    homePage.openStore();
    homePage.clickSingIn();
    authPage.singInForUser(loginsArray[0]);
});
Scenario(
  "buy item",
  ({ I, itemOrderPage, homePage }) => {
    homePage.openStore();
    homePage.clickWomenButton();
    homePage.changeToListView();
    homePage.makeAnOrder();
    pause();
    I.see('SHOPPING-CART');
    itemOrderPage.confirmAnOrder();
  }
).tag('@order26blouse');

After(({authPage}) => {
    authPage.logOut();
});
