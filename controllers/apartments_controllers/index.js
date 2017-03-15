const router = require('express').Router();
const controller = require('./controller');

//Route for apartment views
router.get('/:id/showApt', controller.aptShow);

// Route for apartment form

//Route for creating new apartment
router.post('/:id/newApt', controller.createApt);

module.exports = router
