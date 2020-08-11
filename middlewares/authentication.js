const jwt = require('jsonwebtoken')
const { User } = require('../models/index.js')

let authentication = (req, res, next) => {
  const payload = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
  // console.log(payload, '<<<<<<<<<');
  User.findOne({
    where: {email:payload}
  })
    .then(user => {
      if (user) {
        // console.log(user);
        req.userId = user.id
        next()
      } else {
        next({
          name:"bad request",
          msg: "false credentials"
        })
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authentication