import BasePage from "./Base-Pages";

class LoginPage extends BasePage {
    get emailField() { return cy.get('#normal_login_email') }
    get passwordField() { return cy.get('#normal_login_password') }
    get buttonLogIn() { return cy.get('.login-form-button') }
    get toast() { return cy.get('.ant-notification-notice-message') }


    get emailValidationSign() { return cy.get('.ant-form-item-control-has-error').contains('Email') }
    get passwordValidationSign() { return cy.get('.ant-form-item-control-has-error').contains('Password') }

    get mainSign() { return cy.contains('h1') }

    get prescriptionAccount() { return cy.contains('p', "Don’t have an account?") }
    get prescriptionAccountLink() { return cy.contains('a', "Create one") }
    get prescriptionPassword() { return cy.contains('p', "Forgot your password?")}
    get prescriptionPasswordLink() { return cy.contains('a', "Reset it")}

    open() {
        return super.open('/v5/user/login')
    }

    login(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.buttonLogIn.click();
    }
}

export default new LoginPage();
