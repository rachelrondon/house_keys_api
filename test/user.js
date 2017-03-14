const request = require('supertest');
const expect = require('chai').expect;
const User = require('../models/user');

const app = require('../index');

describe('Users', () => {
  let tempUser;

  // Creates a new post to be used during testing, so as not to disturb the relevent data
  before((done) => {
    User
    .create({
      first_name: 'Gianni',
      last_name: 'Papasdapolus',
      username: 'dingle',
      email: 'brungus@gmail.com',
      password: 'password'
    })
    .then((user_record) => {
      tempUser = user_record;
      done();
    });
  });

  it('Get /users/:id should return a status code of 200 and should be an object', (done) => {
    request(app)
    .get('/users/4')
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    });
  })
})
