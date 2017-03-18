const controller = {};
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

controller.create = (req, res) => {
  User
  .create(req.body.user)
  .then((user) =>{
    const authUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username
    }
    const token = jwt.sign({email: req.body.email}, "Bringo", {expiresIn: "1y"});
      res.json({
      token: token,
      user: authUser
    });
  })
}


controller.processLogin = (req, res) => {
  User
  .findByEmail(req.body.email)
  .then((user) =>{
    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.password, user.password_digest);
      if(isAuthed) {
        console.log('isAuthed is true');
        const authUser = {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          username: user.username
        }
        const token = jwt.sign({email: req.body.email}, "Bringo", {
            expiresIn: "1y"
          });
        res.json({
          token: token,
          user: authUser
        });
        console.log(authUser)
      } else {
        console.log('is Authed is false')
      }
    } else {
      console.log('user does not exist')
    }
  })
}

module.exports = controller;
