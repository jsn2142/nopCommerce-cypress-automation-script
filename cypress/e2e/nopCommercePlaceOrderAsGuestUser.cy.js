// --- Created by Jesan Rahman ---
import '../support/commands'
import 'cypress-mochawesome-reporter/register'

describe('Place an Order as Guest User', () => {
    describe('Visit the nopCommerce website', () => {
        it('Load the homepage', () => {
            cy.clearCookies()
            cy.visitWebsite()
        })
    })
    describe('Start purchasing as a Guest User', () => {
        it('Select the Nokia Lumia 1020 cellphone', () => {
            cy.selectAProduct('Nokia Lumia 1020')
        })
        it('Add to Cart 2 units of the Nokia Lumia 1020 cellphone', () => {
            cy.addToCart('2')
        })
        it('Checkout with the order', () => {
            cy.orderCheckOut('Checkout as a guest or register')
        })
    })    
    describe('Insert the Guest user billing information for the purchase', () => {
        it('Insert the guest billing address information', () => {
            cy.fixture('userInfo').then((userData) => {
                let firstName = userData.user02.firstName
                let lastName = userData.user02.lastName
                cy.insertGuestUserBillingAddress(firstName, lastName)
            })
        })
        it('Set a shipping Method - Next Air Day and Continue', () => {
            cy.setShippingMethod()
        })
        it('Set a payment Method - Credit Card and Continue', () => {
            cy.setPaymentMethod()
        })
        it('Insert the payment information and Continue', () => {
            cy.insertPaymentInfo()
        })
        it('Confirm the Order with all the information', () => {
            cy.confirmOrder()
        })
    })
    describe('Verify the purchase confirmation', () => {
        it('Match the name used in the guest user registration with the billing information', () => {
            cy.fixture('userInfo').then((userData) => {
                let firstName = userData.user02.firstName
                let lastName = userData.user02.lastName
                let fullName = firstName + " " + lastName
                cy.verifyPurchaseInfo(fullName)
            })
        })
    })
})