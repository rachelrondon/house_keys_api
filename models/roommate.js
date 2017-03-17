const db = require('../config/db');
const bcrypt = require('bcryptjs');

let Roommate = {};

Roommate.createRM = (roommate) => {
  return db.one(`
    INSERT INTO roommates
    (title,
    gender,
    smoker,
    sleep,
    dishes,
    toilet_paper,
    age,
    wallet,
    user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
  `, [
    roommate.title,
    roommate.gender,
    roommate.smoker,
    roommate.sleep,
    roommate.dishes,
    roommate.toilet_paper,
    roommate.age,
    roommate.wallet,
    roommate.user_id
  ]);
};

Roommate.findAll = () => {
  return db.manyOrNone(`SELECT * FROM roommates`);
};

module.exports = Roommate;
