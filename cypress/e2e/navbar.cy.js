describe('Navbar spec', () => {
    it('navbar homepage link redirects to /home', () => {
        cy.visit('http://localhost:3000/games')
        cy.getNavbar()
            .find('a[data-cy="navigation-link"]')
            .contains('Home')
            .click()
        cy.url().should('contain', '/home')
    })

    it('navbar game link redirects to /games', () => {
        cy.visit('http://localhost:3000/home')
        cy.getNavbar()
            .find('a[data-cy="navigation-link"]')
            .contains('Game')
            .click()
        cy.url().should('contain', '/games')
    })

    it('navbar cart link should open cart', () => {
        cy.visit('http://localhost:3000/home')
        cy.getCartButton().click()
        cy.get('#cart').should('be.visible')
        cy.get('div[data-cy="close_cart"]').click()
        cy.get('#cart').should('not.exist')
    })
})
