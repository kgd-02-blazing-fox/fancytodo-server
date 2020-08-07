const { User } = require('../models/index.js')
const { userToken } = require('../helper/jsontoken.js')
const { comparePassword } = require('../helper/hashPasword.js')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);


class UserController {
  static registerUser(req, res, next) {
    try {
      let input = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }
      User.create(input)
        .then(data => {
          res.status(201).json({
            name: data.name,
            email: data.email
          })
        })
        .catch(err => {
          // res.status(500).json(err)
          next(err)
        })
    } catch (err) {
      // res.status(500).json(err)
      next(err)
    }
  }

  static async loginUser(req, res, next) {
    try {
      const payload = {
        email: req.body.email,
        password: req.body.password
      }
      // console.log(payload);
      await User.findOne({
        where: { email: payload.email }
      })
        .then(user => {
          if (user) {
            const valid = comparePassword(payload.password, user.password)
            if (valid) {
              let access_token = userToken(user.email)
              res.status(200).json({
                access_token
              })
            } else {
              next({
                name: "Unauthorized",
                msg: "username/password wrong!"
              })
            }
          }
        })
        .catch(err => {
          next(err)
        })
    } catch (err) {
      // res.status(500).json(err)
      next(err)
    }
  }

  static async googleLogin(req, res, next) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.headers.google_token,
        audience: process.env.CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const foundUser = await User.findOne({
        where: {
          email: payload.email
        }
      })
      let createdUser
      if (!foundUser) {
        createdUser = await User.create({
          name: payload.name,
          email: payload.email,
          password: "1234"
        })
        console.log('MASUK IF USER');
      }
      // console.log(createdUser, 'SETELAH DIBUAT');
      // console.log(foundUser.toJSON().email, 'INIIIIIIIIIIIIIII');
      // console.log(createdUser);
      const access_token = userToken(foundUser ? foundUser.toJSON().email : createdUser.email)
      res.status(200).json({ access_token })

    } catch (err) {
      console.log(err);
      next(err)
    }

  }
}

module.exports = { UserController }
