/// <reference types = "Cypress" />

/* Test comment update */

/* 
it('By ID', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('#email')
});

it('By Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/focus')
    cy.get('.DocSearch-Button')
});

it('By Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/focus')
    cy.get('nav')
});

it('By Attribute', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('[name=pass]')
});

it('By Different Attributes', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('[data-testid="royal_login_button"][value="Вход"]')
});

it('By Different Types', () => {
    cy.visit('www.facebook.com')
    cy.get('a[data-testid="open-registration-form-button"]')
});

it.only('By Contains Text', () => {
    cy.visit('www.facebook.com')
    cy.get('[class^="_42"]')
});
 */
it('Get, Find, Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find("td").find('div').find('button').eq(8)
});

it.only('Get, Find, Eq', () => {
    cy.viewport(1600, 600)
    cy.visit("https://docs.cypress.io/api/commands/eq#Syntax")
    cy.get('.w-sidebar').find('ul').find('li').find('a').eq(0)
});

