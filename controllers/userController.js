const { User } = require('../models/')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jsonwebtoken')

const { verify } = require('../helpers/googleOauth')

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
          access_token: token
        })
      }
    } catch (err) {
      next(err)
    }
  }
  static async postGoogleLogin(req, res, next) {
    const id_token = req.headers.id_token
    console.log({
      id_token
    })
    try {
      const googlePayload = await verify(id_token)
      const email = googlePayload.email
      console.log({email})

      const user = await User.findOne({ where: { email } })
      console.log({
        user
      })

      if (user) {
        if (!comparePassword(process.env.GOOGLE_DEFAULT_PASSWORD, user.password)) {
          throw { name: 'Please login via website' }
        } else {
          const token = signToken({ email: user.email})
          res.status(200).json({
            access_token: token
          })
        }
      } else {
        console.log(`${email} belum terdaftar!`)
        let newGoogleUser = await User.create({
          email,
          password: process.env.GOOGLE_DEFAULT_PASSWORD
        })
        const token = signToken({ email })
        console.log(token)
        res.status(201).json({
          access_token: token
        })
      }
    } catch (err) {
      console.log(err.errors)
      next(err)
    }
  }
}

module.exports = UserController