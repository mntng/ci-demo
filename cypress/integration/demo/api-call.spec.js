describe('demo 3', () => {
  it('api call', () => {
    cy.request('https://reqbin.com/echo/get/json')
      .its('body')
      .then((body) => {
        expect(body).property('success').to.eql('true');
      })
  })
});