const db = require('../config/db');
const bcrypt = require('bcrypt');

let User = {};

User.create = (user) => {
  user.password_digest = bcrypt.hashSync(user.password_digest, 10);
  return db.one(`
    INSERT INTO users
    (first_name, last_name, username, email, password_digest)
    VALUES
    ($1, $2, $3, $4, $5) RETURNING *
    `,
    [
      user.first_name,
      user.last_name,
      user.username,
      user.email,
      user.password_digest
    ]
  );
};

User.findByUserId = (id) => {
  return db.one(`
    SELECT * FROM users
    WHERE id = $1;`,
    [id]
  );
};

User.findByEmail = (email) => {
  return db.one(`
    SELECT * FROM users
    WHERE email = $1;`,
    [email]
  );
};

module.exports = User;
