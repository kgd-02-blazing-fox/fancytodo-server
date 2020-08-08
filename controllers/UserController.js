
const { User } = require('../models/index.js')
const { comparePass } = require('../helpers/bcrypt.js')
const { generateToken } = require('../helpers/jwt.js')

class UserController {

  static register(req, res, next) {
    let payload = {
      email: req.body.email,
      password: req.body.password
    }
    console.log(payload)
    User.create(payload)
      .then((data) => {
        console.log('berhasil dibuat')
        let newUser = {
          id: data.id,
          email: data.email,
        }
        let accessToken = generateToken(newUser)
        res.status(200).json({
          data: newUser,
          accessToken: accessToken,
        })
      })
      .catch(err => {
        console.log(err)
        next(err)
      })

  }

  static login(req, res, next) {
    let payload = {
      email: req.body.email,
      password: req.body.password
    }
    console.log(payload)
    User.findOne({
      where: {
        email: payload.email
        // email: req.body.email
      }
    })
      .then(data => {
        // console.log(data)
        if (data) {
          let verify = comparePass(payload.password, data.password)
          let useData = {
            id: data.id,
            email: data.email
          }
          if (verify) {
            console.log('berhasil login')
            let accessToken = generateToken(useData)
            console.log('status 200', accessToken, '<<<<<<<<')
            res.status(200).json({
              data: useData,
              accessToken: accessToken,
            })
          } else {
            // else password salah atau gagal tergenerate
            // console.log('pw gagal')
            next({
              name: 'BadRequest',
              errors: [{ msg: 'Invalid Email/Password' }]
            })
          }
        } else {
          // console.log('email gagal')
          // else email tidak ketemu
          next({
            name: 'BadRequest',
            errors: [{ msg: 'Invalid Email/Password' }]
          })
        }
      })
      .catch(err => {
        // console.log('gagal')
        next({
          name: 'InternalServerError',
          errors: [{ message: err }]
        })
      })

  }

}

module.exports = UserController