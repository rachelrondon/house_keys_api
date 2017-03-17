const router = require('express').Router();

const controller = require('./controller');

// Route for checking valid login
router.post('/login', controller.processLogin);

// Route for creating a new user
router.post('/new', controller.create);

module.exports = router;
