// --- Created by Jesan Rahman ---
import '../support/commands'
import 'cypress-mochawesome-reporter/register'

describe('User Registration in nopCommerce Website', () => {
    it('Visit the nopCommerce website', () => {
        cy.clearCookies()
        cy.visitWebsite()
    })
    describe('User Registration via the Register Page', () => {
        it('Click on the Register button', () => {
            cy.userRegistrationPageVisit('Register')
        })
        it('Enter a new user information in the Registration form field', () => {
            cy.fixture('userInfo').then((userData) => {
                let firstName = userData.user01.firstName
                let lastName = userData.user01.lastName
                cy.registerAnUser(firstName, lastName)
            })           
        })
        it('Confirmation of a successful user registration', () => {
            cy.userRegistrationConfirmation('Your registration completed')
        })
    })
})