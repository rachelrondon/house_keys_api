const router = require('express').Router();

const controller = require('./controller');

// Route for sign up form
router.get('/new', controller.new);

// Route for loggin form
router.get('/login', controller.login);

// Route for checking valid login
router.post('/login', controller.process_login);

// Route for creating a new user
router.post('/', controller.create);

module.exports = router;
