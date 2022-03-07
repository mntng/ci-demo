describe('demo 2', () => {
  it('access wiki', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').type('java')
    cy.get('.pure-button').click();
    cy.url().then(url => {
      if (url.includes('Java')) {
        expect(true);
      } else if (url.includes('java')) {
        expect(true);
      } else {
        expect(false);
      }
    });
  })
});