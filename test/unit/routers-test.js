const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Router tests', () => {
    describe('/home page', () => {
        it('Expect to return status ok', (done) => {
            chai.request(server)
                .get('/home')
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
    });
});
