const { I } = inject();

module.exports = {
    storeLink: 'http://automationpractice.com/index.php',
    singInButton: {css: 'a.login'},
    womenButton: {xpath: '//*[@id="block_top_menu"]/ul/li[1]/a'},

    openStore() {
        I.amOnPage(this.storeLink);
    },

    clickSingIn() {
        I.click(this.singInButton);
    },

    clickWomenButton() {
        I.click(this.womenButton);
    },
}
