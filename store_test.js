Feature('Store');

Scenario('test something', ({ I,
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
   createAccountPage.clickRegisterButton();  //I.click({css: '#submitAccount'});
   
   pause();   // I know that this string not for GIT ;)
});
