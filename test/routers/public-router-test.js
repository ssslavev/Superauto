const chai = require('chai');
const sinonModule = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Home router test', () => {
    let sinon;

    const controller = {
        home: () => {},
    };

    beforeEach(() => {
        sinon = sinonModule.sandbox.create();
    });

    afterEach(() => {
        sinon.restore();
    });

    const app = require('./../../config/app.config');
    describe('GET /', () => {
        it('expect status 200 when request home', (done) => {
            sinon.stub(controller, 'home').callsFake((req, res) => {
                res.status(200).end();
            });

        require('./../../routers/home-router')({ app, controller });

        chai.request(app)
            .get('/')
            .end((req, res) => {
                expect(res.status).equals(200);
                done();
            });
        });
    });
});

describe('About router test', () => {
    let sinon;

    const controller = {
        about: () => { },
    };

    beforeEach(() => {
        sinon = sinonModule.sandbox.create();
    });

    afterEach(() => {
        sinon.restore();
    });

    const app = require('./../../config/app.config');
    describe('GET /about', () => {
        it('expect status 200 when request about', (done) => {
            sinon.stub(controller, 'about').callsFake((req, res) => {
                res.status(200).end();
            });

        const user = { username: 'test' };
        require('./../../routers/about-router')({ app,
            controller,
            req: user }
        );

        chai.request(app)
            .get('/about')
            .end((req, res) => {
                expect(res.status).equals(200);
                done();
            });
        });
    });
});

describe('Services router test', () => {
    let sinon;

    const controller = {
        services: () => {},
    };

    beforeEach(() => {
        sinon = sinonModule.sandbox.create();
    });

    afterEach(() => {
        sinon.restore();
    });

    const app = require('./../../config/app.config');
    describe('GET /services', () => {
        it('expect status 200 when request services', (done) => {
            sinon.stub(controller, 'services').callsFake((req, res) => {
                res.status(200).end();
            });

        require('./../../routers/services-router')({ app, controller });

        chai.request(app)
            .get('/services')
            .end((req, res) => {
                expect(res.status).equals(200);
                done();
            });
        });
    });
});
