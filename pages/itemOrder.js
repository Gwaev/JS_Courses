const { I } = inject();

module.exports = {
    listViewButton: {xpath: '//*[@id="list"]/a/i'},
    addToCart: {xpath: '//*[@id="center_column"]/ul/li[3]/div/div/div[3]/div/div[2]/a[1]'},
    proceedToCheckout: {xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'},
    summaryProceedToCheckout: {xpath: '//*[@id="center_column"]/p[2]/a[1]'},
    addressProceedToCheckout: {xpath: '//*[@id="center_column"]/form/p/button'},
    shippingProceedToCheckout: {xpath: '//*[@id="form"]/p/button'},
    shippingTermsAgreementCheckBox: {xpath: '//*[@id="cgv"]'},
    payByBankWire: {xpath: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a'},
    confirmAnOrderButton: {xpath: '//*[@id="cart_navigation"]/button'},

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

    confirmAnOrder() {
         I.click(this.summaryProceedToCheckout);
         I.click(this.addressProceedToCheckout);
         I.click(this.shippingTermsAgreementCheckBox);
         I.click(this.shippingProceedToCheckout);
         I.click(this.payByBankWire);
         I.click(this.confirmAnOrderButton);
         I.see('Your order on My Store is complete');
    },
}
