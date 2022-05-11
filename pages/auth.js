const { I } = inject();

module.exports = {
    authLink: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    newUserEmailInput: {css: '#email_create'},
    createAccountButton: {css: '#SubmitCreate'},
    existUserEmailInput: {css: '#email'},
    userPasswordInput: {css: '#passwd'},
    submitButton: {css: '#SubmitLogin'},




    waitingForPageLoad() {
        I.waitForVisible(this.newUserEmailInput);
    },

    fillNewUserEmail(email) {
        this.waitingForPageLoad();
        I.fillField(this.newUserEmailInput, email);
    },

     clickCreateAnAccount() {
        I.click(this.createAccountButton);
     },

    singInForUser(user) {
        this.waitingForPageLoad();
        I.fillField(this.existUserEmailInput, user.email);
        I.fillField(this.userPasswordInput, secret(user.passwd));
        I.click(this.submitButton);

    },
}
