describe('demo 1', () => {
  it('access App', () => {
    cy.visit('http://localhost:3000');
    cy.get('.App-link').contains('Learn React');
  })
});