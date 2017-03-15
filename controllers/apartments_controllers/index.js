const router = require('express').Router();
const controller = require('./controller');

//Route for apartment views
router.get('/user/:id/apartments', controller.aptDashboard);

// Route for apartment form

//Route for creating new apartment

module.exports = router
