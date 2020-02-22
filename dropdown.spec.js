describe('sort the results', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/inventory.html')
    })


    it('open drop down and select price (low to high)', () => {

        cy.get('.product_sort_container').select('Price (low to high)')

        cy.get('.inventory_list > :nth-child(1)').should('contain.text', 'Onesie')

    })


    it('open drop down and select name desc', () => {

        cy.get('.product_sort_container').select('Name (Z to A)')

        cy.get('.inventory_list > :nth-child(1)').should('contain.text', '(Red)')

    })

    it('open drop down and select price (high to low)', () => {

        cy.get('.product_sort_container').select('Price (high to low)')

        cy.get('.inventory_list > :nth-child(1)').should('contain.text', 'Jacket')

    })

    it('open drop down and select name ascc', () => {

        cy.get('.product_sort_container').select('Name (A to Z)')
        
        cy.get('.inventory_list > :nth-child(1)').should('contain.text', 'Backpack')

    })

})



