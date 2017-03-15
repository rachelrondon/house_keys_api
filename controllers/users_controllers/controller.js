const controller = {};
const User = require('../../models/user');

controller.dashboard = (req, res) => {
  User
  .findByUserId(req.params.id)
  .then((data) => {
    res.json(data)
    // console.log('UserId:', req.params.id);
  })
  .catch(err => console.log('ERROR:', err));
}

controller.login = (req, res) => {
  res.render('login')
}

module.exports = controller;
