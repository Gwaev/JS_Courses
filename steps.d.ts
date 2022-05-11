/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type userData = typeof import('./data/user.js');
type itemOrderPage = typeof import('./pages/itemOrder.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, userData: userData, itemOrderPage: itemOrderPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
