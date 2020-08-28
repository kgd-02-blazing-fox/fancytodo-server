const { User } = require('../models')
const { compareHash } = require('../helpers/bcrypt.js')
const { generateToken } = require('../helpers/jwt.js')
const { verifyIdToken } = require('../helpers/googleOauthVerification.js')
const nodemailer = require('nodemailer')


class UserController {
    static register(req, res, next) {
        const { name, email, password } = req.body
        console.log(req.body)

        User
            .create({
                name,
                email,
                password
            })
            .then(newUser => {
                res.status(201).json({
                    id: newUser.id,
                    email: newUser.email
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body

        User
            .findOne({
                where: {
                    email
                }
            })
            .then(result => {
                if (result) {
                    let compare = compareHash(password, result.password)
                    if (compare) {
                        let accessToken = generateToken({
                            id: result.id,
                            email: result.email
                        })
                        res.status(200).json({
                            accessToken
                        })
                    } else {
                        throw {
                            msg: "wrong password",
                            code: 401
                        }
                    }
                } else {
                    throw {
                        msg: "email not registered",
                        code: 401
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next) {
        let email
        let name
        let newUser = false
        const token = req.headers.google_token
        verifyIdToken(token)
            .then(payload => {
                email = payload.email
                name = `${payload.given_name} ${payload.family_name}`
                return User
                    .findOne({
                        where: {
                            email
                        }
                    })
            })
            .then(user => {
                if (user) {
                    return user
                } else {
                    let randomstring = Math.random().toString(36).slice(-8);
                    UserController.sendEmail(email, randomstring)
                    newUser = true
                    return User
                        .create({
                            name,
                            email,
                            password: randomstring
                        })
                }
            })
            .then(newUser => {
                let code = newUser ? 201 : 200
                const accessToken = generateToken({
                    id: newUser.id,
                    email: newUser.email
                })
                res.status(code).json({
                    accessToken
                })
            })
            .catch(err => {
                next(err)
            })

    }

    static sendEmail(email, name) {
        console.log(email, name, 'ini node')
        const password = name
        //step 1
        //call transporter and authenticator
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SEND,
                pass: process.env.PASSWORD_SEND

                // user: 'pancakebantet@gmail.com',
                // pass: 'coba@7890'
                //silahkan diisi, ini bisa diisi langung, bisa juga diisi dengan dotenv:
                //kalo gamau langsung coba liat dokumentasi dotenv
                //call with process.env.
                //.env di ignore
                //di dalem .env isi :
                //PASSWORD:
                //EMAIL:
                //referensi: https://www.youtube.com/watch?v=Va9UKGs1bwI&t

            }
        })
        //step 2 define delivery path
        let mailOptions = {
            from: '',
            //jangan lupa diisi from-nya
            to: `${email}`,
            subject: 'Thank You!',
            // text: `Halo ToSeMol's family! Terimakasih ya ${name} telah berbelanja di website kami. Pesanan anda akan kami proses dan kirim segera!`
            text: `Thank you for registering on our website. this is your password "${password}", please change it or you can use it`

        }
        //IMPORTANT!
        //Before sending, check you email provider regarding the authority for nodemailer use
        //for an example, you must turn on this feature if you use gmail: https://myaccount.google.com/lesssecureapps

        //Step 3 (Time to send it!)

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('hooray! email is sent!')
            }
        })
    }
}

module.exports = UserController
