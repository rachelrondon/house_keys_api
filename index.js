require('dotenv').config({ silent: true });
const express      = require('express');
const logger       = require('morgan');

const app  = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server listening on port', PORT));

app.use(logger('dev'));

app.use(require('./resources'));
