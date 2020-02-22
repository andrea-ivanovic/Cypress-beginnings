/// <reference types="Cypress" />

import { obj } from "../cypress/page_objects/obj"

describe('cart', () => {
    const objects = new obj()
    
    before(() => {
        objects.inventory_direct_url ()
    })

    it('add item 1', () => {

        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(1) > .pricebar > .btn_secondary').should('contain.text', 'REMOVE')
    })

    it('add item 2', () => {

        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_secondary').should('contain.text', 'REMOVE')
    })

    it('add item 3', () => {

        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_secondary').should('contain.text', 'REMOVE')
    })

    it('add item 4', () => {

        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(4) > .pricebar > .btn_secondary').should('contain.text', 'REMOVE')
    })

    it('add item 5', () => {

        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(5) > .pricebar > .btn_secondary').should('contain.text', 'REMOVE')
    })

    it('add item 6', () => {

        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(6) > .pricebar > .btn_secondary').should('contain.text', 'REMOVE')
    })
})

describe('remove all items from the cart', () => {
    
    before(() => {
        cy.visit('https://www.saucedemo.com/cart.html')
    })

    it('remove item 1', () => {

        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.be.visible')
    })

    it('remove item 2', () => {

        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.be.visible')
    })

    it('remove item 3', () => {

        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.be.visible')
    })


    it('remove item 4', () => {
        cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.be.visible')
    })

    it('remove item 5', () => {
        cy.get(':nth-child(7) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get(':nth-child(7) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.be.visible')
    })

    it('remove item 6', () => {
        cy.get(':nth-child(8) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get(':nth-child(8) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.be.visible')
    })
})


