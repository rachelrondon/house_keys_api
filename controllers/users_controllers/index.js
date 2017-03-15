const router = require('express').Router();

const controller = require('./controller');

// Route for login view
router.get('/login', controller.login)

// Route for sign up form
router.get('/new', controller.newUser);

// Route for single user
router.get('/:id', controller.dashboard);

// Route for checking valid login
router.post('/login', controller.processLogin);
//
// Route for creating a new user
router.post('/', controller.create);

module.exports = router;
