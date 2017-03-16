BEGIN TRANSACTION;

DROP TABLE IF EXISTS roommates;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_digest VARCHAR(255) NOT NULL
);

CREATE TABLE apartments (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  rent INTEGER,
  description VARCHAR(255) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE roommates (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  gender INTEGER,
  smoker INTEGER,
  sleep INTEGER,
  dishes INTEGER,
  toliet_paper INTEGER,
  age INTEGER,
  wallet INTEGER,
  user_id INTEGER REFERENCES users(id)
);

COMMIT;
