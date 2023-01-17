describe('Page Load User Flow', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {
      method: 'GET',
      fixture: '../fixtures/orders.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('should display title on page load', () => {
    cy.get('h1').should('contain', 'Burrito Builder')
  })

  it('should display existing orders on page load', () => {
    cy.get('.orders').within(() => {
      cy.get('.order').should('have.length', 3)
        .get('.order').eq(0).find('h3').contains("Scott")
        .get('.order').eq(0).find('.ingredient-list > :nth-child(1)').contains("steak")
        .get('.order').eq(0).find('.ingredient-list > :nth-child(2)').contains("pico de gallo")
        .get('.order').eq(0).find('.ingredient-list > :nth-child(3)').contains("carnitas")
        .get('.order').eq(1).find('h3').contains("Heather")
        .get('.order').eq(1).find('.ingredient-list > :nth-child(1)').contains("beans")
        .get('.order').eq(1).find('.ingredient-list > :nth-child(2)').contains("guacamole")
        .get('.order').eq(1).find('.ingredient-list > :nth-child(3)').contains("tomatoes")
        .get('.order').eq(2).find('h3').contains("Jenn")
        .get('.order').eq(2).find('.ingredient-list > :nth-child(1)').contains("carnitas")
        .get('.order').eq(2).find('.ingredient-list > :nth-child(2)').contains("guacamole")
        .get('.order').eq(2).find('.ingredient-list > :nth-child(3)').contains("rice")
    })
  })

  it('should display form on page load with proper inputs', () => {
    cy.get('input').should('exist')
      .get('[placeholder="Name"]').should('have.value', "")
    cy.get('[name="beans"]').contains('beans')
      .get('[name="steak"]').contains('steak')
      .get('[name="carnitas"]').contains('carnitas')
      .get('[name="sofritas"]').contains('sofritas')
      .get('[name="queso fresco"]').contains('queso fresco')
      .get('[name="pico de gallo"]').contains('pico de gallo')
      .get('[name="hot sauce"]').contains('hot sauce')
      .get('[name="guacamole"]').contains('guacamole')
      .get('[name="jalapenos"]').contains('jalapenos')
      .get('[name="cilantro"]').contains('cilantro')
      .get('[name="sour cream"]').contains('sour cream')
      .get('.submit-button').contains('Submit Order')
      .get('p').contains("Order: Nothing selected")
  })

  it('should reflect changes in form when user fills out the form', () => {
    cy.get('[placeholder="Name"]')
      .type('Bob')
      .should('have.value', "Bob")
    cy.get('[name="beans"]').click()
      .get('p').contains("Order: beans")
    cy.get('[name="steak"]').click()
      .get('p').contains("Order: beans, steak")
  })
})