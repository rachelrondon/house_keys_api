const controller = {};
const Roommate = require('../../models/roommate');

controller.gender = (req, res) => {
  Roommate
  .findByGender(1)
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
