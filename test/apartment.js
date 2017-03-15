const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

const User = require('../models/user');
const Apartment = require('../models/apartment');

// build and require Apartments.create
// make 'before' for users
// build and require User.create
// OR get rid of ref requirement in migration

describe('Apartments', () => {

  let tempApt;
  let tempUser;

  // before model testing of Apartments.create
  before((done) => {

    User
    .create({
      first_name: 'Bob',
      last_name: 'Jones',
      username: 'BJones',
      email: 'jones@aol.com',
      password_digest: 'password'
    })
    .then((user_record) => {
      // console.log('user_record:',user_record)
      tempUser = user_record;
      done();
    });
  });

  before((done) => {
    Apartment
    .create({
      address: 'Fartville USA',
      rent: 1000,
      description: 'smells like farts',
      photo: 'url photo',
      user_id: tempUser.id
    })
    .then((apt_record) => {
      tempApt = apt_record;
      // console.log('apt record:', apt_record);
      done();
    });
  });

  it('GET  /users/:id/apartments should return a stauts code of 200 and should be an array', (done) => {
    // console.log('apartment_data:', apt_record);
    request(app)
    .get(`/users/${tempUser.id}/apartments`)
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    });
  });

  // it('POST /apartments/new should return a 201 stauts code and should give us back a newly created object', (done) => {
  //   request(app)
  //   .post('/apartments/new')
  //   .send({
  //     book:{
  //       address: '33 Salem St',
  //       rent: 2000,
  //       description: 'nice place',
  //       photo: 'fviruvnriberiv',
  //       user_id: "{bcyrpt value}"
  //     }
  //   })
  //   .end((err, results) => {
  //     expect(results.statusCode).to.equal(201);
  //     expect(results.body).to.be.an.instanceOf(Object);
  //     expect(results.body).to.not.be.an.instanceOf(Array);
  //     done();
  //   });
  // });
})
