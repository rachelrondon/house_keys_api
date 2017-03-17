const controller = {};
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

controller.create = (req, res) => {
  User
  .create(req.body.user)
  .then((user) => {
    const token = jwt.sign({email: req.body.email}, "Bringo", {
        expiresIn: "1y"
      });
    res
    .status(201)
    .json({user, token})
  })
  .catch((err) => {
      res
      .status(400)
      .json(err);
  });
}

controller.processLogout = (req, res) => {

}

controller.processLogin = (req, res) => {
  User
  .findByEmail(req.body.email)
  .then((user) =>{
    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.password, user.password_digest);
      if(isAuthed) {
        console.log('isAuthed is true');
        const authUser = user;
        console.log(user)
        const token = jwt.sign({email: req.body.email}, "Bringo", {
            expiresIn: "1y"
          });
        res.json({token: token});
      } else {
        console.log('is Authed is false')
      }
    } else {
      console.log('user does not exist')
    }
  })
}

module.exports = controller;
