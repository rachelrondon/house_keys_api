const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');
// const User = require('./models/user');

// build and require Apartments.create
// make 'before' for users
// build and require User.create
// OR get rid of ref requirement in migration

describe('Apartments', () => {

  let apartment;
  let user;

  // before model testing of Apartments.create
  before((done) => {
    User
    .create({
      first_name: 'Jon',
      last_name: 'Troy',
      username: 'JTroy',
      email: 'jTroy@aol.com',
      password_digest: 'hf74knccdd'
    })
    .then((user_data) => {
      user = user = data;
      done();
    });

    Apartments
    .create({
      address: 'Fartville USA',
      rent: 1000,
      description: 'smells liek farts',
      photo: 'url photo',
      user_id: 1
    })
    .then((apartment_data) => {
      apartment = apartment_data;
      done();
    });
  });

  it('GET  /apartments should return a stauts code of 200 and should be an array', (done) => {
    request(app)
    .get('/apartments')
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Array);
      done();
    });
  })

  it('POST /apartments/new should return a 201 stauts code and should give us back a newly created object', (done) => {
    request(app)
    .post('/apartments/new')
    .send({
      book:{
        address: '33 Salem St',
        rent: 2000,
        description: 'nice place',
        photo: 'fviruvnriberiv',
        user_id: "{bcyrpt value}"
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(201);
      expect(results.body).to.be.an.instanceOf(Object);
      expect(results.body).to.not.be.an.instanceOf(Array);
      done();
    });
  });
})
