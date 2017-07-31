const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Data tests', () => {
    describe('GetAdverts', () => {
        console.log('Testing is here');
    });
});
