const router = require('express').Router();

router.use('/users/:id', require('./controllers/users_controllers'));

router.use('/apartments', require('./controllers/apartments_controllers'));

router.use('/roommates', require('./controllers/roommates_controllers'));

module.exports = router;
