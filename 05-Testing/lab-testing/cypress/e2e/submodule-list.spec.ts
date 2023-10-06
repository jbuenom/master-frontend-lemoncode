describe('Submodule-list scene specs', () => {
    it('should visit /submodule-list, show Proyectos link and Empleados link', () => {
        cy.login();
        cy.findByRole('heading', {level: 5, name: 'Proyectos'}).as('proyectosHeading');
        cy.findByRole('heading', {level: 5, name: 'Empleados'}).as('empleadosHeading');

        cy.get('@proyectosHeading').should('have.text','Proyectos');
        cy.get('@empleadosHeading').should('have.text','Empleados');
    });
    it('should visit proyectos after click on /projects link', () => {
        cy.login();
        cy.findByRole('heading', {level: 5, name: 'Proyectos'}).as('proyectosHeading');
        cy.get('@proyectosHeading').click();
        cy.url().should('equal', 'http://localhost:8080/#/projects');
    });

    it('should visit empleados after click on /employees link', () => {
        cy.login();
        cy.findByRole('heading', {level: 5, name: 'Empleados'}).as('empleadosHeading');
        cy.get('@empleadosHeading').click();
        cy.url().should('equal', 'http://localhost:8080/#/employees');
    });
})