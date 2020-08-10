const jwt = require('jsonwebtoken')

let userToken = (payload) =>{
  const token =  jwt.sign(payload, process.env.JWT_SECRET)
  return token
}

module.exports = {userToken}