
import ClientPage from "../pages/Client";
import ModalWindow from "../component/modal-window";
import Dashboard from "../component/dashboard";



interface ClientData {
    name: string;
    phone: string;
    email: string;
    description: string;
}


describe('Client creation', () => {

   
    beforeEach(() => {
        cy.visit(Cypress.env('TOKEN'), Cypress.env('USER_ID'));
        ClientPage.open();
        ClientPage.openModalWindow();
    });


    describe('SMOKE', () => {
        let testClientValid = {
            companyName: undefined,
            phone: undefined,
            email: undefined,
            description: undefined,
        };
        const client: ClientData = {
            name: testClientValid.companyName,
            phone: testClientValid.phone,
            email: testClientValid.email,
            description: testClientValid.description,
        };


        it('User is able to create a new client if only required fields are filled, new client is added on clients dashboard as the first element in the list', () => {
            ModalWindow.createClient(client.name, client.phone);
            cy.wait(1000);
            Dashboard.tableContent.find('a[href]').eq(0).invoke('text').then((text: string) => {
                expect(text).to.eq(client.name, '**Company name matches**');
            });
            Dashboard.tableContent.find('td').eq(1).invoke('text').then((text: string) => {
                expect(text).to.eq(client.phone, '**Phone matches**');
            });
        });


        it('User isn\'t able to create a new client if required fields are empty', () => {
            ModalWindow.field("Full Name", "name").type(client.name).clear();
            ModalWindow.field("Phone", "phone").type(client.phone).clear();
            ModalWindow.buttonSubmit.click();
            ModalWindow.fieldValidationSign('Full Name', 'Required').should('be.visible');
            ModalWindow.fieldValidationSign('Phone', 'Required').should('be.visible');
            ModalWindow.creatingForm.should('be.visible');
        });


        it('Client creation if all fields are filled', () => {
            ModalWindow.createClient2(client.name, client.phone, client.email, client.description);
            cy.wait(1000);
            Dashboard.tableContent.find('td').eq(0).invoke('text').then((text: string) => {
                expect(text).to.eq(client.name, '**Company name matches**');
            });
            Dashboard.tableContent.find('td').eq(1).invoke('text').then((text: string) => {
                expect(text).to.eq(client.phone, '**Phone matches**');
            });
            Dashboard.tableContent.find('td').eq(2).invoke('text').then((text: string) => {
                expect(text).to.eq(client.email, '**Email matches**');
            });
        });
    });


    describe('Modal window content', () => {
        it('The sign \'Create Client\' exists on the Modal window', () => {
            ModalWindow.mainSign.should('be.visible').should('have.text', 'Create Client');
        });
        it('Modal window closes when "x" mark is clicked', () => {
            ModalWindow.markClose.click();
            Dashboard.tableContent.should('be.visible');
        });
        it('Modal window closes when clicking on the area outside modal window', () => {
            ClientPage.pageContent.click('bottomLeft');
            Dashboard.tableContent.should('be.visible');
        });
    });
});
