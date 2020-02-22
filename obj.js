export class obj {

    navigate() {
        cy.visit('https://www.saucedemo.com/index.html')
    }

    inventory_direct_url() {
        cy.visit('https://www.saucedemo.com/inventory.html')

    }

    name(textName) {
        cy.get('[data-test=firstName]').type(textName + "{enter}")

    }

    lastName(textLastName) {
        cy.get('[data-test=lastName]').type(textLastName + "{enter}")

    }

    postCode(postCode) {
        cy.get('[data-test=postalCode]').type(postCode + "{enter}")
    }

    conitnue_button() {
        cy.get('[data-test=postalCode]').click()

    }


}

