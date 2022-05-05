const { I } = inject();

module.exports = {
    storeLink: 'http://automationpractice.com/index.php',
    singInButton: {css: 'a.login'},

    openStore() {
        I.amOnPage(this.storeLink);
    },

    clickSingIn() {
        I.click(this.singInButton);
    },
}
