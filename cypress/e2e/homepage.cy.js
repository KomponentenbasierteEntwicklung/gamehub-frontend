describe('Homepage spec', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:8080/api/v1/games').as(
            'getAllGames'
        )
    })
    it('Homepage loads game cards', () => {
        cy.visit('http://localhost:3000/home')
        cy.wait('@getAllGames')
        cy.getGameSection()
            .find('div[data-cy="game_card"]')
            .should('exist')
            .should('be.visible')
    })

    it('Game cards onclick redirects to game detail', () => {
        cy.visit('http://localhost:3000/home')
        cy.wait('@getAllGames')

        cy.getGameSection()
            .find('div[data-cy="game_card"]')
            .should('exist')
            .should('be.visible')
            .first()
            .click()
    })
})
