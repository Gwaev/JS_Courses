const { I } = inject();

module.exports = {
    summaryProceedToCheckout: {xpath: '//*[@id="center_column"]/p[2]/a[1]'},
    addressProceedToCheckout: {xpath: '//*[@id="center_column"]/form/p/button'},
    shippingProceedToCheckout: {xpath: '//*[@id="form"]/p/button'},
    shippingTermsAgreementCheckBox: {xpath: '//*[@id="cgv"]'},
    payByBankWire: {xpath: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a'},
    confirmAnOrderButton: {xpath: '//*[@id="cart_navigation"]/button'},

    confirmAnOrder() {
        I.waitForVisible(this.summaryProceedToCheckout);
        I.click(this.summaryProceedToCheckout);
        I.waitForVisible(this.addressProceedToCheckout);
        I.click(this.addressProceedToCheckout);
        I.waitForVisible(this.shippingTermsAgreementCheckBox);
        I.click(this.shippingTermsAgreementCheckBox);
        I.waitForVisible(this.shippingProceedToCheckout);
        I.click(this.shippingProceedToCheckout);
        I.waitForVisible(this.payByBankWire);
        I.click(this.payByBankWire);
        I.waitForVisible(this.confirmAnOrderButton);
        I.click(this.confirmAnOrderButton);
        I.see('Your order on My Store is complete');
    },
}
