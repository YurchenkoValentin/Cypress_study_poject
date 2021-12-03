/// <reference types = "Cypress" />

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in');
});

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('div').contains('Sign in');
});

it.only('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('SIGN IN', {matchCase: false});
}); 