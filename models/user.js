const db = require('../config/db');

const bcrypt = require('bcryptjs');

let User = {};

User.create = (user) => {
  // console.log('creating', user)
  // const password = bcrypt.hashSync(user.password, 10);
  return db.query(`
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
