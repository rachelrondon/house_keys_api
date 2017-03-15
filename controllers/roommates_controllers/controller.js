const controller = {};
const Roommate = require('../../models/roommate');

controller.createRM = (req, res) => {
  Roommate
  .createRM(req.body.roommate)
  .then((pet) => {
    res
    .sendStatus(201)
    .json(pet);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
};

controller.rmShow = (req, res) => {
  Roommate
  .findByRMId(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
