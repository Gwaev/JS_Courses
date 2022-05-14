const { I } = inject();

module.exports = {
    storeLink: 'http://automationpractice.com/index.php',
    singInButton: {css: 'a.login'},
    womenButton: {xpath: '//*[@id="block_top_menu"]/ul/li[1]/a'},
    listViewButton: {xpath: '//*[@id="list"]/a/i'},
    addToCart: {xpath: '//*[@id="center_column"]/ul/li[3]/div/div/div[3]/div/div[2]/a[1]'},
    proceedToCheckout: {xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'},

    openStore() {
        I.amOnPage(this.storeLink);
    },

    clickSingIn() {
        I.click(this.singInButton);
    },

    clickWomenButton() {
        I.click(this.womenButton);
    },

    waitingForPageLoad() {
        I.waitForVisible(this.listViewButton);
    },

    changeToListView() {
        this.waitingForPageLoad();
        I.click(this.listViewButton);
    },

    makeAnOrder() {
        I.click(this.addToCart);
        I.click(this.proceedToCheckout);
    },
}
