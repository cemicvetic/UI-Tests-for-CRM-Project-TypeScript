import App from "./App";

class ClientPage extends App {

    get buttonCreateClient() { return cy.get('[type="button"][class="ant-btn ant-btn-primary"]') }

    get pageContent() { return cy.get('.ant-drawer-mask') }

    open() {
        return super.open('/v5/client')
    }

    openModalWindow() {
        this.buttonCreateClient.click()
    }
}

export default new ClientPage()