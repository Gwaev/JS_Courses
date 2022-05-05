const { I } = inject();

module.exports = {
    authLink: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    newUserEmailInput: {css: '#email_create'},
    createAccountButton: {css: '#SubmitCreate'},

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
}
