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
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          error: "Your email already exists"
        })
      }
      console.log(err.name)
      // res.status(500).json(err.name)
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }
  static async postLogin(req, res, next) {
    let { email, password } = req.body
    try {
      const userLogin = await User.findOne({ where: { email } })
      if (!comparePassword(password, userLogin.password)) {
        throw { name: "Invalid email & password!" }
      } else {
        const token = signToken({ email })
        res.status(200).json({
          acces_token: token
        })
      }
    } catch (err) {
      console.log(err.name)
      // res.status(500).json(err.name)
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }
}

module.exports = UserController