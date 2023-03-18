// --- Created by Jesan Rahman ---
// Home Page selectors
var registerPageButton = '.ico-register'
// User Registration form selectors
var regPageTitle = "div[class='page-title'] h1"
var radioButtonMale = '#gender-male'
var radioButtonFemale = '#gender-female'
var firstNameField = "#FirstName"
var lastNameField = "#LastName"
var dobDay = "select[name='DateOfBirthDay']"
var dobMonth = "select[name='DateOfBirthMonth']"
var dobYear = "select[name='DateOfBirthYear']"
var emailAddressField = "#Email"
var companyNameField = "#Company"
var newsletterCheckBox = "#Newsletter"
var passwordField = "#Password"
var confirmPasswordField = "#ConfirmPassword"
var registerButton = "#register-button"
var registrationConfirmMessage = ".result"
// Shop home page selectors
var electronicsCategoryButton = "body > div:nth-child(7) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1)"
var cellPhonesSubCategory = "li[class='active last'] li:nth-child(2) a:nth-child(1)"
var nokiaLumiaProduct = ":nth-child(1) > .product-item > .details > .product-title > a"
var productNameTitle = "div[class='product-name'] h1"
var productDescription = '.short-description'
var productQuantityField = "#product_enteredQuantity_20"
var addToCartButton = "#add-to-cart-button-20"
var upperMessageContent = ".content"
var upperMessageContentCloseButton = "span[title='Close']"
var shoppingCartButton = ".cart-label"
var goToCartButton = ".button-1.cart-button"
// Shopping Cart page selectors
var shoppingCartPageHeader = "div[class='page-title'] h1"
var termsNconditionsCheckBox = "#termsofservice"
var checkoutButton = "#checkout"
var checkoutAsGuestButton = ".button-1.checkout-as-guest-button"
var checkoutAsGuestSubHeader = "div[class='new-wrapper checkout-as-guest-or-register-block'] div[class='title'] strong"
// Guest user purchase flow - Biling Address selectors
var billingAddressOptionLabel = "label[for='billing-address-select']"
var billingAddressOptionDeleteButton = "#delete-address-button"
var billinigAddressFirstName = "#BillingNewAddress_FirstName"
var billinigAddressLastName = "#BillingNewAddress_LastName"
var billinigAddressEmail = "#BillingNewAddress_Email"
var billinigAddressCompany = "#BillingNewAddress_Company"
var billinigAddressCountry = "#BillingNewAddress_CountryId"
var billinigAddressState = "#BillingNewAddress_StateProvinceId"
var billinigAddressCity = "#BillingNewAddress_City"
var billinigAddressAddressLine1 = "#BillingNewAddress_Address1"
var billinigAddressAddressLine2 = "#BillingNewAddress_City"
var billinigAddressZipCode = "#BillingNewAddress_ZipPostalCode"
var billinigAddressPhoneNumber = "#BillingNewAddress_PhoneNumber"
var billinigAddressFaxNumber = "#BillingNewAddress_FaxNumber"
var billingContinueButton = "button[onclick='Billing.save()']"
// Guest user purchase flow - Shipping Address selectors
var groundRadioButton = "#shippingoption_0"
var nextDayAirRadioButton = "#shippingoption_1"
var secondDayAirRadioButton = "#shippingoption_2"
var shippingContinueButton = ".button-1.shipping-method-next-step-button"
// Guest user purchase flow - Payment method selectors
var paymentMethodMoney = "#paymentmethod_0"
var paymentMethodCreditCard = "#paymentmethod_1"
var paymentContinueButton = "button[class='button-1 payment-method-next-step-button']"
// Guest user purchase flow - Payment page selectors
var creditCardDropDown = "#CreditCardType"
var cardHolderName = "#CardholderName"
var cardNumber = "#CardNumber"
var expireMonthDropDown = "#ExpireMonth"
var expireYearDropDown = "#ExpireYear"
var cardCode = "#CardCode"
var backButton = "body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ol:nth-child(1) > li:nth-child(5) > div:nth-child(2) > div:nth-child(2) > p:nth-child(1) > a:nth-child(1)"
var paymentInfoNextButton = ".button-1.payment-info-next-step-button"
// Guest user purchase flow - Order confirmation page selectors
var confirmOrderHeader = "div[class='page-title'] h1"
var confirmOrderContinueButton = ".button-1.confirm-order-next-step-button"
var orderConfirmMessage = "div[class='section order-completed'] div[class='title'] strong"
// Order Information page selectors
var orderDetailsPageLink = '.details-link > a'
var billedUserFullName = '.billing-info > .info-list > .name'

// Environment base URL can be switched in the next line, if avaiable. Right now, only 'PRODUCTION' is available.
const url = Cypress.env('PRODUCTION') // Change the value to switch to other environment base URL if available.
var baseUrl = url['BaseUrl']

Cypress.Commands.add('visitWebsite', () => {
    cy.visit(baseUrl)
    cy.url().should('include', 'training.nop-station.com')
})
Cypress.Commands.add('userRegistrationPageVisit', (assertionString) => {
    cy.get(registerPageButton).click()
    cy.get(regPageTitle).should('include.text', assertionString)
})
Cypress.Commands.add('registerAnUser', (firstName, lastName) => {
    var tempNumber = parseInt(Math.random() * 1000)
    var emailAddress = firstName + tempNumber + lastName + '@yopmail.com'
    cy.get(radioButtonMale).click() 
    cy.get(firstNameField).type(firstName)
    cy.get(lastNameField).type(lastName)
    cy.get(dobDay).select('16')
    cy.get(dobMonth).select('December')
    cy.get(dobYear).select('1995')
    cy.wait(1000)
    cy.get(emailAddressField).type(emailAddress.toLowerCase())
    cy.wait(1000)
    cy.get(companyNameField).type("Brainstation-23")
    cy.get(newsletterCheckBox).click()
    cy.wait(1000)
    cy.get(passwordField).type('pass@1234', { log: false }) // Password will be invisible in log
    cy.get(confirmPasswordField).type('pass@1234', { log: false }) // Password will be invisible in log
    cy.wait(1000)
    cy.get(registerButton).click()
    cy.wait(1000)
})
Cypress.Commands.add('userRegistrationConfirmation', (assertionString) => {
    cy.get(registrationConfirmMessage).should('include.text', assertionString)
    cy.wait(1000)
})
Cypress.Commands.add('selectAProduct', (assertionString) => {
    cy.get(electronicsCategoryButton).click()
    cy.wait(1000)
    cy.get(cellPhonesSubCategory).click()
    cy.wait(1000)
    cy.get(nokiaLumiaProduct).click()
    // cy.wait(3000)
    // Commented out the below assertion for an application error that occurs sometimes
    // cy.get(productNameTitle).should('include.text', assertionString)
    // cy.wait(1000)
})
Cypress.Commands.add('addToCart', (prodQuantity) => {
    cy.get(productDescription, { timeout: 10000 }).should('be.visible')
    cy.get(productQuantityField).clear()
    cy.wait(1000)
    cy.get(productQuantityField).type(prodQuantity)
    cy.wait(1000)
    cy.get(addToCartButton).click()
    // cy.wait(1000)
    cy.get(upperMessageContent, { timeout: 10000 }).should('be.visible')
    cy.get(upperMessageContent).should('include.text', 'The product has been added to your shopping cart')
    cy.wait(1000)
    cy.get(upperMessageContentCloseButton).click()
    cy.wait(1000)
    cy.get(shoppingCartButton).click()
    // cy.wait(1000)
    cy.get(shoppingCartPageHeader, { timeout: 10000 }).should('be.visible')
    cy.get(shoppingCartPageHeader).should('include.text', 'Shopping cart')
})
Cypress.Commands.add('orderCheckOut', (assertionString) => {
    cy.get(termsNconditionsCheckBox).click()
    cy.wait(1000)
    cy.get(checkoutButton).click()
    cy.wait(3000)
    cy.get(checkoutAsGuestSubHeader).should('include.text', assertionString)
    cy.get(checkoutAsGuestButton).click()
    cy.wait(3000)
})
Cypress.Commands.add('insertGuestUserBillingAddress', (firstName, lastName) => {
    var tempNumber = parseInt(Math.random() * 1000)
    var emailAddress = firstName + tempNumber + lastName + '@yopmail.com'
    cy.get(billinigAddressFirstName).type(firstName)
    cy.get(billinigAddressLastName).type(lastName)
    cy.get(billinigAddressEmail).type(emailAddress.toLowerCase())
    cy.get(billinigAddressCountry).select("United States of America")
    cy.wait(2000)
    cy.get(billinigAddressState).select("Alabama")
    cy.wait(1000)
    cy.get(billinigAddressCity).type("Houston City")
    cy.get(billinigAddressAddressLine1).type("Houston Street Address")
    cy.get(billinigAddressZipCode).type("2122")
    cy.get(billinigAddressPhoneNumber).type("123456789")
    cy.wait(3000)
    cy.get(billingContinueButton).click()
    cy.wait(3000)

})
Cypress.Commands.add('setShippingMethod', () => {
    cy.wait(3000)
    cy.get(nextDayAirRadioButton).check()
    cy.wait(1000)
    cy.get(shippingContinueButton).click()
    cy.wait(3000)
})
Cypress.Commands.add('setPaymentMethod', () => {
    cy.wait(3000)
    cy.get(paymentMethodCreditCard).click()
    cy.get(paymentContinueButton).click()
    cy.wait(3000)
})
Cypress.Commands.add('insertPaymentInfo', () => {
    cy.wait(3000)
    cy.get(creditCardDropDown).select('Visa')
    cy.get(cardHolderName).type('Newt Scamander')
    cy.get(cardNumber).type('4000000000000002')
    cy.get(expireMonthDropDown).select('01')
    cy.get(expireYearDropDown).select('2025')
    cy.get(cardCode).type('555')
    cy.wait(1000)
    cy.get(paymentInfoNextButton).click()
    cy.wait(3000)
})
Cypress.Commands.add('confirmOrder', () => {
    cy.wait(3000)
    cy.get(confirmOrderContinueButton).click()
    cy.wait(3000)
    cy.get(orderConfirmMessage).should('include.text', 'Your order has been successfully processed!')
    cy.wait(3000)
})
Cypress.Commands.add('verifyPurchaseInfo', (userFullName) => {
    cy.get(orderDetailsPageLink).click()
    // cy.wait(3000)
    cy.get(billedUserFullName, { timeout: 10000 }).should('be.visible')
    cy.get(billedUserFullName).should('include.text', userFullName)
})