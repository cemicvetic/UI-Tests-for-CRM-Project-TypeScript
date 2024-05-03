
const generateClient = (): Client => {
    return {
        companyName: faker.company.companyName(),
        phone: faker.phone.phoneNumber('###-###-####'),
        email: faker.internet.email(),
        description: faker.lorem.sentence()
    };
};

const clients = {
    testClientValid: generateClient()
};

export default clients;
