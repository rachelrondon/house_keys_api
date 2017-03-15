const router = require('express').Router();
const controller = require('./controller');

router.get('/:id/showRM', controller.rmShow);

router.post('/:id/newRM', controller.createRM);

module.exports = router;
