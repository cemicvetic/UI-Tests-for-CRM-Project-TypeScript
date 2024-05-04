// Define interfaces for expected response structure
interface LoginUser {
    companyAccount: string;
    name: string;
    roles: string[];
}

interface LoginPayload {
    token: string;
    userId: string;
    user: LoginUser;
}

interface LoginResponse {
    [x: string]: { token: any; userId: any; user: any; };

    // @ts-ignore
    body: {
        payload: LoginPayload;
    }
}

// Global hook for Log In by API request to get token, user id, etc.
before(() => {
    cy.request<LoginResponse>(
        'POST',
        `${Cypress.env('API_BASE_URL')}/v5/user/login`,
        { email: Cypress.env('EMAIL'), password: Cypress.env('PASSWORD') }
    ).then((response) => {
        const { token, userId, user } = response.body.payload;
        Cypress.env('TOKEN', token);
        Cypress.env('USER_ID', userId);
        Cypress.env('COMPANY_ID', user.companyAccount);
        Cypress.env('USER_NAME', user.name);
        Cypress.env('USER_ROLE', user.roles[0]); // Assuming there's always at least one role
    })
})
