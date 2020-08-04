const { User } = require('../models/')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jsonwebtoken')

class UserController {
  static async postRegister(req, res, next) {
    let { email, password } = req.body
    try {
      const newUser = await User.create({ email, password })
      res.status(201).json({
        msg: "User created",
        data: newUser
      })
    } catch (err) {
      next(err)
    }
  }
  static async postLogin(req, res, next) {
    let { email, password } = req.body
    try {
      const userLogin = await User.findOne({ where: { email } })
      if (!userLogin) {
        throw { name: "Invalid email & password!" }
      }
      if (!comparePassword(password, userLogin.password)) {
        throw { name: "Invalid email & password!" }
      } else {
        const token = signToken({ email })
        res.status(200).json({
          acces_token: token
        })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController