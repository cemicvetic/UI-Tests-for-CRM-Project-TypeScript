class Dashboard {
    get tableContent(): Cypress.Chainable {
        return cy.get('tbody.ant-table-tbody');
    }
}

export default new Dashboard();
