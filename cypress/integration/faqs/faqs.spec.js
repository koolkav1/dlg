/// <reference types="cypress" />
context('Accordion-tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
      })
    it('should have title', () => {
      cy.get('h1').should('contain.text', 'HAVE A QUESTION? WE CAN HELP');
    })
    it('should open accordion', () => {
      cy.get('div:nth-child(2) > button').click();
      cy.get('div:nth-child(2) > button').should('have.class', 'active');
    })
    it('accordion should contain text', () => {
      cy.get('div:nth-child(2) > button').click();
      cy.get(' div:nth-child(2) > div > p').should('be.visible');
    })  
})

