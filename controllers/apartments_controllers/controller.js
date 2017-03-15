const controller = {};
const Apartment = require('../../models/apartment');

controller.aptDashboard= (req, res) => {
  Apartment
  .findByAptId(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
