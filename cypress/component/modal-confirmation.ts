class ModalConfirmation {

    get window(): Cypress.Chainable {
        return cy.get('.ant-modal-body');
    }

    get buttonCancel(): Cypress.Chainable {
        return cy.xpath('//button[*[text() = "Cancel"]]');
    }

    get buttonOk(): Cypress.Chainable {
        return cy.xpath('//button[*[text() = "OK"]]');
    }

}

export default new ModalConfirmation();
