class ModalWindow {
    get mainSign(): Cypress.Chainable {
        return cy.get('.ant-drawer-title');
    }

    get markClose(): Cypress.Chainable {
        return cy.get('button[aria-label="Close"]');
    }

    get creatingForm(): Cypress.Chainable {
        return cy.get('.ant-form.ant-form-vertical');
    }

    get buttonSubmit(): Cypress.Chainable {
        return cy.get('button[type="submit"]');
    }

    field(label: string, id: string): Cypress.Chainable {
        return cy.xpath(`//*[contains(@class, "ant-row")][.//label[contains(text(), "${label}")]]//*[@id="${id}"]`);
    }

    createClient(name: string, phone: string): void {
        this.field("Full Name", "name").type(name);
        this.field("Phone", "phone").type(phone);
        this.buttonSubmit.click();
    }

    createClient2(name: string, phone: string, email: string, description: string): void {
        this.field("Full Name", "name").type(name);
        this.field("Phone", "phone").type(phone);
        this.field("Email", "email").type(email);
        this.field("Description", "description").type(description);
        this.buttonSubmit.click();
    }

    fieldValidationSign(fieldTitle: string, message: string): Cypress.Chainable {
        return cy.xpath(`//*[@title="${fieldTitle}"]/../..//*[text()="${message}"]`);
    }
}

export default new ModalWindow();
