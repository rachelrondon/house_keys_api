const controller = {};
const User = require('../../models/user');

controller.dashboard = (req, res) => {
  User
  .findByUserId(req.params.id)
  .then((data) => {
    res.json(data)
    console.log(req.params.id);
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
