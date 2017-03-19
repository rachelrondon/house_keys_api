const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.rmShow);
router.post('/new', controller.createRM);

router.get('/male', controller.male);
router.get('/female', controller.female);

router.get('/smoker', controller.smoker);
router.get('/nonsmoker', controller.rmDoesNotSmoke);

router.get('/charmin', controller.charmin);
router.get('/scotts', controller.scotts);
router.get('/generic', controller.generic);

router.get('/sleepbefore10', controller.rmSleepsBefore10PM);
router.get('/sleeparound10', controller.rmSleepsAround10PM );
router.get('/sleepaftermidnight', controller.rmSleepAfterMidnight);

router.get('/disheseverymeal', controller.rmDishesEveryMeal);
router.get('/dishessinkfull', controller.rmDishesSinkFull);
router.get('/disheseveryday', controller.rmDishesEveryDay);
router.get('/whataredishes', controller.rmWhatAreDishes);

router.get('/age21to30', controller.rmAge21to30);
router.get('/age31to40', controller.rmAge31to40);
router.get('/40plus', controller.rmAge40plus);

router.get('/rent800to1000', controller.rent800to1000);
router.get('/rent1001to1500', controller.rent1001to1500);
router.get('/rent1501to2000', controller.rent1501to2000);
router.get('/rent2000plus', controller.rent2000Plus);

module.exports = router;
