describe('Login spec', () => {
    it('login with keycloak is visible on login screen', () => {
        cy.visit('http://localhost:3000')
        cy.getLoginButton()
            .should('be.visible')
            .should('contain', 'Sign in with keycloak')
    })
})
