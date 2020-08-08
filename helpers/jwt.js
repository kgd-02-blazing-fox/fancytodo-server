const jwt = require('jsonwebtoken')

const JWT_SECRET =  process.env.SECRET

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET)
}

const verifyToken = (payload) => {
  return jwt.verify(payload, JWT_SECRET)
}

module.exports = {generateToken,verifyToken}