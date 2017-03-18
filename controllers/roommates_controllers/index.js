const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.rmShow);
router.get('/male', controller.male);
router.get('/female', controller.female);
router.get('/smoker', controller.smoker);
router.get('/nonsmoker', controller.rmDoesNotSmoke);
router.get('/sleepbefore10', controller.rmSleepsBefore10PM);
router.get('/age21to30', controller.rmAge21to30);
router.get('/age31to40', controller.rmAge31to40);
router.get('/40plus', controller.rmAge40plus);





// router.get('/male', controller.gender);
// router.get('/female', controller.gender);

router.post('/new', controller.createRM);

module.exports = router;
