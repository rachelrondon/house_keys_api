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

controller.newUser = (req, res) => {
  res.render('new');
}

controller.create = (req, res) => {
  User
  .create(req.body.user)
  .then((user) => {
    res
    .status(201)
    .json(user)
  })
  .catch((err) => {
      res
      .status(400)
      .json(err);
  });
}

controller.login = (req, res) => {
  console.log(req.body.user)
  res.render('login');
}

controller.processLogin = (req, res) => {
  User
  .findByEmail(req.body.user.email)
  .then((data) =>{
    res.json(data)
  })
}

module.exports = controller;
