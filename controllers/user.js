const { User } = require('../models/index.js')
const { comparePassword } = require('../helpers/bcrypt.js')
const { sign } = require('../helpers/jwt.js')

class UserController {
    static register(req, res){
        const payload = {
            email: req.body.email,
            password: req.body.password
        }

        User
            .create(payload)
            .then(data => {
                res.status(201).json(
                    {
                        email: data.email,
                        password: data.password
                    }
                )
            })
            .catch(err => {
                if ( err.name === "SequelizeValidationError"){
                    err = err.errors.map(error => {
                        return error.message
                    })
                    res.status(400).json(err)
                }
                else {
                    res.status(500).json({ Error: "Internal server error" })
                }
            })
    }

    static login(req,res){
        const inputEmail = req.body.email
        const inputPassword = req.body.password

        User.findOne({
            where: {
                email: inputEmail
            }
        })
        .then(data => {
            const dbPassword = data.password

            if(!data){
                throw 'invalid username / password'
            }
            else if(!comparePassword(inputPassword, dbPassword)){
                throw 'invalid username / password'
            }
            else {
                const payload = {
                    email: data.email
                }
                const token = sign(payload)
                res.status(200).json({
                    token
                })
            }
        })
        .catch(err => {
            res.status(500).json({ Error: "Internal server error" })
        })

    }
}

module.exports = UserController