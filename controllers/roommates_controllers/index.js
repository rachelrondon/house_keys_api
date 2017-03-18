const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.rmShow);
router.get('/', controller.gender);

router.get('/male', controller.gender);
router.get('/female', controller.gender);


router.post('/new', controller.createRM);

module.exports = router;
