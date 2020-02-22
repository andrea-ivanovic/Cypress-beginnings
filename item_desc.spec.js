/// <reference types="Cypress" />

import { obj } from "../cypress/page_objects/obj"

const objects = new obj()

describe('open item description with img and title', () => {

    beforeEach(() => {
        objects.inventory_direct_url()
    })

    it('open Sauce Labs Backpack', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')
        cy.get('.inventory_details_back_button').click()

        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')

    })

    it('open Sauce Labs Bike Light', () => {
        cy.get('#item_0_title_link > .inventory_item_name').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=0')
        cy.get('.inventory_details_back_button').click()

        cy.get('#item_0_img_link > .inventory_item_img').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=0')
    })

    it('open Sauce Labs Bolt T-Shirt', () => {
        cy.get('#item_1_title_link > .inventory_item_name').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=1')
        cy.get('.inventory_details_back_button').click()

        cy.get('#item_1_img_link > .inventory_item_img').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=1')
    })

    it('open Sauce Labs Fleece Jacket', () => {
        cy.get('#item_5_title_link > .inventory_item_name').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=5')
        cy.get('.inventory_details_back_button').click()

        cy.get('#item_5_img_link > .inventory_item_img').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=5')
    })

    it(' open Sauce Labs Onesie', () => {
        cy.get('#item_2_title_link > .inventory_item_name').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=2')
        cy.get('.inventory_details_back_button').click()

        cy.get('#item_2_img_link > .inventory_item_img').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=2')
    })

    it('open Test.allTheThings() T-Shirt (Red)', () => {
        cy.get('#item_3_title_link > .inventory_item_name').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=3')
        cy.get('.inventory_details_back_button').click()

        cy.get('#item_3_img_link > .inventory_item_img').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=3')
    })

})

