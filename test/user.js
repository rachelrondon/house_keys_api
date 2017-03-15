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
      first_name: 'Joe',
      last_name: 'Dirt',
      username: 'JoeDirte',
      email: 'garden@digit.com',
      password_digest: 'password'
    })
    .then((user_record) => {
      // console.log('user_record:',user_record)
      tempUser = user_record[0];
      done();
    });
  });

  it('Get /users/:id should return a status code of 200 and should be an object', (done) => {
    request(app)
    .get(`/users/${tempUser.id}`)
    .end((err, results) => {
      // console.log('YOOOOOOOO', tempUser);
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    });
  })

  it('POST /users/new should return a status code of 201 and should be an object', (done) => {
    request(app)
    .post(`/users/`)
    .send({
      user: {
        first_name: 'John',
        last_name: 'Lennon',
        username: 'givepeaceachance',
        email: 'JohnAndYoko@hotmail.com',
        password_digest: 'password'
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(201);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    })
  })
})
