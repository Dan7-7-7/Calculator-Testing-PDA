describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24')
  })
  
  it('should update the display with the result of operators', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should allow multiple operations to be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '14')
  })

  it('should give expected output for negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should give expected output for decimal numbers', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click(); 
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6.6')
  })

  it('should give expected output for very large numbers', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '14664');
  })

  it('should display "that would be a very big number" when a number is divided by 0', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'that would be a very big number');
  })
})
