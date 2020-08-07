const bcrypt = require('bcryptjs');

let hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt)
}

let comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

module.exports = { hashPassword, comparePassword }