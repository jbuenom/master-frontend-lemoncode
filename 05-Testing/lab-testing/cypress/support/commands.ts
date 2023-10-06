Cypress.Commands.add('login', () => {
    const user = 'admin';
    const password = 'test';
    // Act
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button').as('loginButton');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get("@loginButton").click();
})