const db = require('../config/db');
const bcrypt = require('bcrypt');

let Apartment = {};

Apartment.createApt = (apartment, latlong) => {
  // console.log('creating apartments', apartment)
  return db.one(`
    INSERT INTO apartments
    (title, address, latlong, rent, description, photo, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7) RETURNING *
  `, [
    apartment.title,
    apartment.address,
    latlong,
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
