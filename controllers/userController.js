const { User } = require('../models/index.js')
const { userToken } = require('../helper/jsontoken.js')
const { comparePassword } = require('../helper/hashPasword.js')


class UserController {
  static registerUser(req, res) {
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
        res.status(500).json(err)
      })
  }

  static async loginUser(req, res) {
    try {
      const payload = {
        email: req.body.email,
        password: req.body.password
      }
      console.log(payload);
      const user = await User.findOne({
        where: { email: payload.email }
      })

      if (user) {
        const access_token = userToken(user.email)
        res.status(200).json({
          access_token
        })
      } else {
        res.status(401).json({
          name: "Unauthorized",
          msg: "username/password wrong!"
        })
      }

    } catch (err) {
      res.status(500).json(err)
    }
  }

}

module.exports = { UserController }
