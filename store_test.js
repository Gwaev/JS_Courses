Feature('Store');

Scenario.skip('test something', ({ I,
                               homePage,
                               authPage,
                               createAccountPage,
                               userData,
                              }) => {

   homePage.openStore();
   homePage.clickSingIn();
   authPage.fillNewUserEmail(Date.now() + '@test.com');
   authPage.clickCreateAnAccount();
   createAccountPage.fillNewUserForm(userData);
   createAccountPage.clickRegisterButton();  //I.click({css: '#submitAccount'});  // don't forget to add 'I' to the callback

   pause();   // I know that this string not for GIT ;)
});

Scenario.only( 'buy item', ({I,
                            itemOrderPage,
                            homePage,
                            authPage,
                            userData,
                            }) => {
    homePage.openStore();
    homePage.clickSingIn();
    authPage.singInForUser(userData);
    homePage.openStore();
    homePage.clickWomenButton();
    homePage.changeToListView();
    homePage.makeAnOrder();
    //pause();
    //I.see('SHOPPING-CART');
    itemOrderPage.confirmAnOrder();
    });


