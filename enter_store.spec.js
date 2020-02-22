/// <reference types="Cypress" />

import { obj } from "../cypress/page_objects/obj"

const objects = new obj() 
describe('Test usernames and use login button', () => {
   
    beforeEach(() => {
       objects.navigate()
    })

    it('input "standard_user" username', () => {
        cy.get('[data-test=username]').type('standard_user')
    
        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('.btn_action').click()

        cy.url().should ('contain', 'inventory')
    })

    it('input "locked_out_user" username', () => {
        cy.get('[data-test=username]').type('locked_out_user')
    
        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('.btn_action').click()

        cy.url().should ('contain', 'inventory')
    })

    it('input "problem_user" username', () => {
        cy.get('[data-test=username]').type('problem_user')
    
        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('.btn_action').click()

        cy.url().should ('contain', 'inventory')
    })

    it('input "performance_glitch_user" username', () => {
        cy.get('[data-test=username]').type('performance_glitch_user')
   
        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('.btn_action').click()

        cy.url().should ('contain', 'inventory')
    })
})

describe ('Enter store without clicking login button', () => {

    beforeEach(() => {
        objects.navigate()
     }) 

    it('input username', () => {
        cy.get('[data-test=username]').type('performance_glitch_user{enter}')
   
        cy.get('[data-test=password]').type('secret_sauce{enter}')

        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })
})
    
describe ('Password and username left blank', () => {

    beforeEach(() => {
        objects.navigate()
     })

    it('click login button', () => {
        cy.get('.btn_action').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })


})
   
