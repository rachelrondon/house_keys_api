const db = require('../config/db');

const bcrypt = require('bcrypt');

let User = {};

User.create = (user) => {
  const password = bcrypt.hashSync(user.password, 10);
  return db.query(`
    INSERT INTO users
    (first_name, last_name, username, email, password_digest)
    VALUES
    ($1, $2, $3, $4, $5)`,
    [
      user.first_name,
      user.last_name,
      user.username,
      user.email,
      password
    ]
  );
};

User.findByUsername = (username) => {
  return db.one(`
    SELECT * FROM users
    WHERE username = $1;`,
    [username]
  );
};

module.exports = User;
