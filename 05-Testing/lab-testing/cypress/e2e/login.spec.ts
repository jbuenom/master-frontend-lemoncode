describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('http://localhost:8080');
  });

  it('should name input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByRole('textbox').click();
    // Assert
    cy.findByRole('textbox').should('have.focus');
  })

  it('should show an alert with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';
    // Act
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button').as('loginButton');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.get("@loginButton").click();
    cy.findByRole('alert').should('have.text', 'Usuario y/o password no válidos') 
  })

  it('should navigate to submodule-list url when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';
    // Act
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button').as('loginButton');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.get("@loginButton").click();
    cy.url().should('equal', 'http://localhost:8080/#/submodule-list')
  });
});
