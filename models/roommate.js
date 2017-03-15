const db = require('../config/db');
const bcrypt = require('bcryptjs');

let Roommate = {};

Roommate.createRM = (roommate) => {
  return db.one(`
    INSERT INTO roommates
    (gender,
    smoker,
    sleep,
    dishes,
    toliet_paper,
    age,
    wallet,
    user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `, [
    roommate.gender,
    roommate.smoker,
    roommate.sleep,
    roommate.dishes,
    roommate.toliet_paper,
    roommate.age,
    roommate.wallet,
    roommate.user_id
  ]);
};

Roommate.findAll = () => {
  return db.manyOrNone(`SELECT * FROM roommates`);
};

module.exports = Roommate;
