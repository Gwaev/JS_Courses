const { I } = inject();

module.exports = {
    storeLink: 'http://automationpractice.com/index.php',
    productPrice: {css: '#our_price_display'},
    quantityOfProduct: {xpath: '//*[@id="quantity_wanted"]'},
    singInButton: {css: 'a.login'},
    womenButton: {xpath: '//*[@id="block_top_menu"]/ul/li[1]/a'},
    listViewButton: {xpath: '//*[@id="list"]/a/i'},
    printedDress26OnFirstPage: {xpath: '//*[@id="center_column"]/ul/li[3]/div/div/div[2]/h5/a'},
    proceedToCheckout: {xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'},
    addToCartButton: {xpath: '//*[@id="add_to_cart"]/button'},

    async getPrice() {
        let prise = await I.grabTextFrom(this.productPrice);
        return prise.substring(1);
    },

    async getQuantity() {
        return await I.grabValueFrom(this.quantityOfProduct);
    },

    openStore() {
        I.amOnPage(this.storeLink);
    },

    clickSingIn() {
        I.click(this.singInButton);
    },

    clickWomenButton() {
        I.click(this.womenButton);
    },

    waitingForPageLoad(pageObject) {
        I.waitForVisible(pageObject);
    },

    changeToListView() {
        this.waitingForPageLoad(this.listViewButton);
        I.click(this.listViewButton);
    },

    openProduct(){
        I.click(this.printedDress26OnFirstPage);
    },

    makeAnOrder() {
        this.waitingForPageLoad(this.addToCartButton);
        I.click(this.addToCartButton);
        I.click(this.proceedToCheckout);
    },
}
