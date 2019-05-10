context('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Log in').click();
  });
  it('As registered user I an login', function() {
    cy.get('#login')
      .type('admin')
      .should('have.value', 'admin');
    cy.get('#password')
      .type('secret')
      .should('have.value', 'secret');
    cy.get('#login-form-submit').click();
    cy.get('body').should('have.class', 'has-toolbar');
  });
});
