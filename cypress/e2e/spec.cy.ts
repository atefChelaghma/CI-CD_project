describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.contains('Vite + React').should('be.visible');
    cy.get('button').click().should('contain', 'count is 1');
  });
});
