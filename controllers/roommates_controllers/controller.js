const controller = {};
const Roommate = require('../../models/roommate');

controller.male = (req, res) => {
  Roommate
  .findByGender(1)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.female = (req, res) => {
  Roommate
  .findByGender(2)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.smoker = (req, res) => {
  Roommate
  .findBySmoker(1)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmDoesNotSmoke = (req, res) => {
  Roommate
  .findBySmoker(2)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmSleepsBefore10PM = (req, res) => {
  Roommate
  .findBySleep(1)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge21to30 = (req, res) => {
  Roommate
  .findByAge(1)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge31to40 = (req, res) => {
  Roommate
  .findByAge(2)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge40plus = (req, res) => {
  Roommate
  .findByAge(3)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.createRM = (req, res) => {
  Roommate
  .createRM(req.body.roommate)
  .then((roommate) => {
    res
    .status(201)
    .json(roommate);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
};

controller.rmShow = (req, res) => {
  Roommate
  .findAll()
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
