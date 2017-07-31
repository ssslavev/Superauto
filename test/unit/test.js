const chai = require('chai');
const sinonModule = require('sinon');
const cryptoJs = require('crypto-js');
const sha1 = cryptoJs.SHA1;
const expect = chai.expect;

describe('Data user tests', () => {
    let sinon;
    beforeEach(() => {
        sinon = sinonModule.sandbox.create();
    });

    afterEach(() => {
        db.then((d) => {
            d.collection('users')
                .deleteOne({ username: expectedUser.username });
        });
    });

    const expectedUser = {
        username: 'userTest5',
        firstName: 'testFirstName',
        lastName: 'testLastName',
        email: 'test@test.com',
        password: '123',
    };

    const connString = require('./../../config/constants').connectionString;
    const db = require('./../../config/db')(connString);
    const data = require('./../../data/users-data')(db);

    it('Create should match user if data is valid', (done) => {
        data.create(expectedUser)
            .then((resUser) => {
                const resUsername = resUser.ops[0].username;
                const resFirstname = resUser.ops[0].firstName;
                const resLastName = resUser.ops[0].lastName;
                const resEmail = resUser.ops[0].email;
                const resPassword = resUser.ops[0].password;
                expect(resUsername).to.be.eql(expectedUser.username);
                expect(resFirstname).to.be.eql(expectedUser.firstName);
                expect(resLastName).to.be.eql(expectedUser.lastName);
                expect(resEmail).to.be.eql(expectedUser.email);
                expect(resPassword).to.be.eql(sha1(expectedUser.password)
                    .toString());
                done();
            });
    });
});
