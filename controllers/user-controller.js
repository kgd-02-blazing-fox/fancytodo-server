const { User } = require('../models/index.js')
const { comparePassword } = require('../helpers/bcrypt.js')
const { signToken } = require('../helpers/jwt.js')
const { verify } = require('../helpers/google-oauth.js')

class UserController {

    //REGISTER
    static register(req, res, next) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(newUser)
            .then(result => {
                res.status(201).json({
                    id: result.id,
                    email: result.email,
                })
            })
            .catch(err => {
                next(err)
            })
    }


    //LOGIN
    static login(req, res, next) {
        let inputEmail = req.body.email
        let inputPassword = req.body.password

        User.findOne({
            where: {
                email: inputEmail
            }
        })
            .then(result => {
                if (result !== null) {
                    if (comparePassword(inputPassword, result.password)) {
                        let payload = {
                            email: result.email
                        }
                        let token = signToken(payload)
                        res.status(200).json({ token })
                    }
                    else {
                        throw { name: "Bad Request" };
                    }

                } else {
                    throw { name: "Bad Request" };
                }
            })
            .catch(err => {
                next(err)
            })
    }

    //Google Login
    static async loginGoogle(req, res, next) {
        let googleToken = req.headers.id_token

        try {
            let googlePayload = await verify(googleToken)
            let googleEmail = googlePayload.email

            let user = await User.findOne({
                where: {
                    email: googleEmail
                }
            })

            if (user) {
                if (comparePassword(process.env.GOOGLE_DEFAULT_PASSWORD, user.password)) {
                    let payload = {
                        email: user.email
                    }

                    res.status(200).json({
                        token: signToken(payload)
                    })
                } else {
                    throw { name: "Bad Request" };
                }
            } else {
                let newUser = await User.create({
                    email: googleEmail,
                    password: process.env.GOOGLE_DEFAULT_PASSWORD
                })

                let payload = {
                    email: newUser.email
                }
                res.status(200).json({
                    token: signToken(payload)
                })
            }
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    }
}

module.exports = UserController;