const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.rmShow);

router.post('/new', controller.createRM);

module.exports = router;
