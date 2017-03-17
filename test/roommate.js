const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

const User = require('../models/user');
const Roommate = require('../models/roommate');

describe('Roommate', () => {
  let tempRM;
  let tempUser;

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
      tempUser = user_record[0];
      done();
    });
  });

  before((done) => {
    console.log('tempUser:', tempUser.id);
    Roommate
    .createRM({
      title: 'Cool Dude Looking For Cool Roommate',
      gender: 1,
      smoker: 2,
      sleep:  2,
      dishes: 2,
      toilet_paper: 1,
      age: 2,
      wallet: 1,
      user_id: tempUser.id
    })
    .then((rm_record) => {
      tempApt = rm_record;
      // console.log('apt record:', apt_record);
      done();
    });
  });

  it('GET  /roommates/ should return a stauts code of 200 and should be an array', (done) => {
    // console.log('apartment_data:', apt_record);
    request(app)
    .get(`/roommates/`)
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Array);
      done();
    });
  });

  it('POST /roommate/:id/newRM should return a 201 stauts code and should give us back a newly created object', (done) => {
    request(app)
    .post(`/roommates/new`)
    .send({
      roommate:{
        title: 'Not a Friend Just a Roommate',
        gender: 2,
        smoker: 1,
        sleep:  1,
        dishes: 3,
        toilet_paper: 2,
        age: 1,
        wallet: 2,
        user_id: tempUser.id
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
