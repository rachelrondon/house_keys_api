require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const app = express();
const jwt = require('jsonwebtoken');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Server listening on port', PORT));

app.use(logger('dev'));

app.use(require('./resources'));

module.exports = app;
