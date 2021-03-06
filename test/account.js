'use strict';

var should = require('should');
var validate = require('validate.js');
var fixtures = require('./fixtures');

describe('Account', function () {
    this.timeout(5000);

    it('fetched account info', function (done) {

        var AfricasTalking = require('../lib')(fixtures.TEST_ACCOUNT);

        var p = AfricasTalking.fetchAccount();
        validate.isPromise(p).should.be.exactly(true);

        p.then(function (resp) {
            resp.should.have.property('UserData');
            done();

        }).catch(function (error) {
            console.log(error);
            done();
        });

    });
});
