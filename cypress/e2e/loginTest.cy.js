describe('Login Test Feature', () => {
  it('unlogged user can access to login route', () => {
    cy.visit('/login');
    cy.url().should('eq', 'http://localhost:8000/login');
  })

  it('user with wrong credentials can not pass', () => {
    cy.visit('/login');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('12345678');
    cy.get('button[type="submit"').click();
    cy.url().should('eq', 'http://localhost:8000/login');
  })

  it('unlogged user can succesfully login with correct credentials', () => {
    cy.visit('/login');
    cy.get('#email').type('prova@gmail.com');
    cy.get('#password').type('12345678');
    cy.get('button[type="submit"').click();
    cy.url().should('eq', 'http://localhost:8000/');
    cy.contains('#navbarDropdown', 'Prova');
  });

});