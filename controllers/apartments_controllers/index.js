const router = require('express').Router();
const controller = require('./controller');

//Route for apartment views
router.get('/', controller.aptShow);

// Route for apartment form

//Route for creating new apartment
router.post('/new', controller.createApt);

module.exports = router
