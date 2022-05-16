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
  "buy item", async ({ I, itemOrderPage, homePage }) => {
    homePage.openStore();
    homePage.clickWomenButton();
    homePage.changeToListView();
    homePage.openProduct();
    let productPrice = await homePage.getPrice();
    let productQuantity = await homePage.getQuantity();
    homePage.makeAnOrder();
    let shippingPrice = await itemOrderPage.getShippingPrice();
    itemOrderPage.confirmAnOrder();
    let totalPrice = await itemOrderPage.getTotalOrderPrise();
    console.log('Price:' + productPrice + '\nQuantity:' + productQuantity + '\nshipping:' + shippingPrice + '\nTotal Prise:' + totalPrice);
    console.log('Total price correct?: ' + ((Number(productPrice) * Number(productQuantity) + Number(shippingPrice)) === Number(totalPrice)));
    I.assertEqual((Number(productPrice) * Number(productQuantity) + Number(shippingPrice)), Number(totalPrice));
    }
).tag('@order26blouse');

After(({authPage}) => {
    authPage.logOut();
});
