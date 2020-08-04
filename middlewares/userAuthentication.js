const jwt = require('jsonwebtoken')
const { User } = require('../models/index.js')

let authentication = (req, res, next) => {
  const payload = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
  User.findOne({
    where: payload.email
  })
    .then(user => {
      if (user) {
        req.userId = user.id
        next()
      } else {
        res.status(401)
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = authentication