const { I } = inject();

module.exports = {
    listViewButton: {xpath: '//*[@id="list"]/a/i'},
    addToCart: {xpath: '//*[@id="center_column"]/ul/li[3]/div/div/div[3]/div/div[2]/a[1]'},
    proceedToCheckout: {xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'},
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
