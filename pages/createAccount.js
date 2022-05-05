const { I } = inject();

module.exports = {
    firstNameInput: { css: '#customer_firstname' },
    lastNameInput: { css: '#customer_lastname' },
    stateSelect: { css: '#id_state' },
    postalCodeInput: { css: '#postcode' },
                                                    //HomeWork2
    daySelect: {css: '#days'},
    monthSelect: {css: '#months'},
    yearSelect: {css: '#years'},
    passwordInput: {css: '#passwd'},
    newsletterCheckBox: {css: '#newsletter'},
    offersCheckBox: {css: '#optin'},
    companyInput: {css: '#company'},
    cityInput: {css: '#city'},
    homePhoneInput: {css: '#phone'},
    mobilePhoneInput: {css: '#phone_mobile'},
    genderMrPick: {css: '#id_gender1'},
    addressInput: {css: '#address1'},

    fillNewUserForm(user) {
        this.waitForPageLoad();
        I.click(this.genderMrPick);
        I.fillField(this.firstNameInput, user.firstName);
        I.fillField(this.lastNameInput, user.lastName);
        I.fillField(this.passwordInput, secret('123456'));
        I.click(this.daySelect);
        I.selectOption(this.daySelect, user.day);
        I.click(this.monthSelect);
        I.selectOption(this.monthSelect, user.month);
        I.click(this.yearSelect);
        I.selectOption(this.yearSelect, user.year);
        I.click(this.newsletterCheckBox);
        I.click(this.offersCheckBox);
        I.fillField(this.companyInput, user.companyName);
        I.fillField(this.addressInput, user.address)
        I.fillField(this.cityInput, user.city)
        I.click(this.stateSelect);
        I.selectOption(this.stateSelect, user.state);
        I.fillField(this.postalCodeInput, user.postalCode);
        I.fillField(this.homePhoneInput, user.homePhone);
        I.fillField(this.mobilePhoneInput, user.mobilePhone);


    },

    waitForPageLoad() {
        I.waitForVisible(this.firstNameInput);
    },
}
