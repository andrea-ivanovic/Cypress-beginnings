/// <reference types="Cypress" />


import { obj } from "../cypress/page_objects/obj"

describe('proceede with payment info', () => {
  const objects = new obj()

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/inventory.html')
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('path').click()
    cy.get('.btn_action').click()
  })

  it('input valid data', () => {

    objects.name('Andrea')
    objects.lastName('Ivanovic')
    objects.postCode('11000')

    cy.get('.btn_action').click()

    cy.get('#checkout_complete_container').should('contain.text', 'THANK YOU FOR YOUR ORDER')
  })

  it('input invalid data', () => {
    objects.name('.')
    objects.lastName('.')
    objects.postCode('.')

    cy.get('.btn_action').click()

    cy.get('#checkout_complete_container').should('not.contain.text', 'THANK YOU FOR YOUR ORDER')

  })

  it('input non-numerical postCode', () => {
    objects.name('Pera')
    objects.lastName('Peric')
    objects.postCode('AAA')

    cy.get('.btn_action').click()

    cy.get('#checkout_complete_container').should('not.contain.text', 'THANK YOU FOR YOUR ORDER')

  })

  it('input all numerical data', () => {
    objects.name('1')
    objects.lastName('1')
    objects.postCode('1')

    cy.get('.btn_action').click()

    cy.get('#checkout_complete_container').should('not.contain.text', 'THANK YOU FOR YOUR ORDER')

  })

})