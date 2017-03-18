const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.rmShow);
router.get('/dashboard', controller.gender);

router.get('/dashboard/male', controller.gender);
router.get('/dashboard/female', controller.gender);


router.post('/new', controller.createRM);

module.exports = router;
