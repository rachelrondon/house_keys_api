const controller = {};
const Apartment = require('../../models/apartment');

// controller for post model
controller.createApt = (req, res) => {
  Apartment
  .createApt(req.body.apartment)
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

// controller for get model of all apts
controller.aptShow = (req, res) => {
  Apartment
  .showAll()
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
