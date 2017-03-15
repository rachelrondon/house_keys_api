// Allows for connection to database
const pgp = require('pg-promise')();

// Specifies database
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'house_keys'
});

module.exports = db;
