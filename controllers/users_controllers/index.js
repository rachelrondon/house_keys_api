const router = require('express').Router();

const controller = require('./controller');

// Route for single user
router.get('/:id', controller.dashboard);

// // Route for sign up form
// router.get('/new', controller.new);
//
// // Route for checking valid login
// router.post('/login', controller.process_login);
//
// // Route for creating a new user
// router.post('/new', controller.create);

module.exports = router;
