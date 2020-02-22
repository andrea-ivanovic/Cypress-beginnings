/// <reference types="Cypress" />


describe('open cart', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/inventory.html')
    })

    it('continue shopping', () => {

        cy.get('path').click()
        cy.url().should('contain', 'cart.html')

        cy.get('.cart_footer > .btn_secondary').click()
        cy.url().should('contain', 'inventory')


        it('proceede to checkout', () => {
            cy.get('path').click()
            cy.get('.btn_action').click()
            cy.url().should('contain', 'checkout')
        })

    })

})










