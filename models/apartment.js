const db = require('../config/db');
const bcrypt = require('bcrypt');

let Apartment = {};

Apartment.createApt = (apartment) => {
  // console.log('creating apartments', apartment)
  return db.one(`
    INSERT INTO apartments
    (title, address, rent, description, photo, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6) RETURNING *
  `, [
    apartment.title,
    apartment.address,
    apartment.rent,
    apartment.description,
    apartment.photo,
    apartment.user_id
  ]);
};

Apartment.showAll = (apartments) => {
  return db.manyOrNone(`
    SELECT *
    FROM apartments`,
    [apartments]
  );
};


module.exports = Apartment;
