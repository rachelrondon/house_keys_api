// Allows for connection to database
const pgp = require('pg-promise')();

// Specifies database
if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
    db = pgp({
        database: "house_keys_development",
        port: 5432,
        host: "localhost"
    });
} else if (process.env.NODE_ENV === "test") {
    db = pgp({
        database: "house_keys_test",
        port: 5432,
        host: "localhost"
    });
}
module.exports = db;
