const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index');

describe('Users', () => {
  it('Get /users/:id should return a status code of 200 and should be an object', (done) => {
    request(app)
    .get('/users/1')
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    });
  })
})
