// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getLoginButton', () => {
    cy.get('button[data-cy="login_with_keycloak"]')
})

Cypress.Commands.add('getGameSection', () => {
    cy.get('div[data-cy="game_section"]')
})

Cypress.Commands.add('getGameCard', () => {
    cy.get('div[data-cy="game_card"]')
})

Cypress.Commands.add('getNavbar', () => {
    cy.get('div[data-cy="navbar"]')
})

Cypress.Commands.add('getCartButton', () => {
    cy.get('button[data-cy="cart-button"]')
})
