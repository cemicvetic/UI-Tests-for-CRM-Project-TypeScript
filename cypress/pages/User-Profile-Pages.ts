import AppPage from "./AppPage";

class UserProfilePage extends AppPage {

    get userName(): Cypress.Chainable {
        return cy.xpath('//h1[.]');
    }

    get companyName(): Cypress.Chainable {
        return cy.xpath('//td[.="Company"]/..//a');
    }

    get userRole(): Cypress.Chainable {
        return cy.xpath('//td[.="Roles"]/..//td[2]');
    }

    get creationDate(): Cypress.Chainable {
        return cy.xpath('//td[.="Created"]/..//td[2]');
    }

    get userEmail(): Cypress.Chainable {
        return cy.xpath('//td[.="Email"]/..//td[2]');
    }

    open() {
        return super.open(`/v5`)
    }
}

export default new UserProfilePage();
