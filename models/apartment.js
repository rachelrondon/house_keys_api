const db = require('../config/db');
const bcrypt = require('bcryptjs');

let Apartment = {};

Apartment.createApt = (apartment) => {
  // console.log('creating apartments', apartment)
  return db.one(`
    INSERT INTO apartments
    (address, rent, description, photo, user_id)
    VALUES
    ($1, $2, $3, $4, $5) RETURNING *
  `, [
    apartment.address,
    apartment.rent,
    apartment.description,
    apartment.photo,
    apartment.user_id
  ]);
};

Apartment.findByAptId = (user_id) => {
  return db.manyOrNone(`
    SELECT *
    FROM apartments
    WHERE user_id = $1`,
    [user_id]
  );
};


module.exports = Apartment;
