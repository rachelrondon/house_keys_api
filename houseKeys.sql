BEGIN TRANSACTION;

DROP TABLE IF EXISTS compatible;
DROP TABLE IF EXISTS roommates;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS users

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_digest VARCHAR(255) NOT NULL
);

CREATE TABLE apartments (
  id BIGSERIAL PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  rent INTEGER,
  description VARCHAR(255) NOT NULL,
  photo VARCHAR(255) NOT NULL
);

CREATE TABLE roommates (
  gender BOOLEAN,
  smoker BOOLEAN,
  sleep INTEGER,
  dishes INTEGER,
  toliet_paper INTEGER,
  age INTEGER,
  wallet INTEGER
);
