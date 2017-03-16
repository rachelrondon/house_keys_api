const controller = {};
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

controller.dashboard = (req, res) => {
  User
  .findByUserId(req.params.id)
  .then((data) => {
    res.json(data)
    // console.log('UserId:', req.params.id);
  })
  .catch(err => console.log('ERROR:', err));
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

controller.processLogin = (req, res) => {
  console.log('req.body', req.body)
  User
  .findByEmail(req.body.email)
  .then((user) =>{
    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.password, user.password_digest);
      if(isAuthed) {
        console.log('isAuthed is true')
        // thank you Alessa for finding out that we only needed req.body not
        // req.body.user.email
        const token = jwt.sign({email: req.body.email}, "Bringo", {
            expiresIn: "30m"
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
