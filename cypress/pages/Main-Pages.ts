import AppPage from "./App";

class MainPage extends AppPage {
    // Using cy.contains() to target elements by their text, where specific selectors are not available.
    get mainSign() { return cy.contains('h1') } // Adjust according to the actual text if needed.

    get description() { return cy.get('.mt-4.mb-5') }

    get tabLogin() { return cy.get('[data-qa="login"]') }
    get tabGetStarted() { return cy.get('[data-qa="register"]') }

    // Simplified selectors using CSS instead of XPath for signs
    get companySalesSign() { return cy.contains('h3', "Company Sales") }
    get personalSalesSign() { return cy.contains('h3', "Personal Sales") }

    open() {
        return super.open(`/v5`)
    }
}

export default new MainPage();
