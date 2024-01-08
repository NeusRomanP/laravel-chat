describe('Messages Test Feature', () => {
  it('unregistered user can not send messages', () => {
    cy.visit('/');
    cy.get('#btn-input').should('not.exist');
    cy.get('#btn-chat').should('not.exist');
    cy.contains('.login-advice', 'Log in to chat');
  })

  it('logged user can send message', () => {
    cy.visit('/login');
    cy.get('#email').type('prova@gmail.com');
    cy.get('#password').type('12345678');
    cy.get('button[type="submit"').click();
    cy.get('#btn-input').should('exist');
    cy.contains('#btn-chat', 'Send');
  })
})