"use strict"

const { User } = require("../models") 
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const salt = bcrypt.genSaltSync(10)

class UserController {
    static async register(req,res,next) {
        const {firstname,lastname,email,password} = req.body
        try {
            if (password.length<6 || password.length>20) throw new Error("Passlength")
            else {
                const user = await User.create({firstname,lastname,email,password:bcrypt.hashSync(password,salt)})
                res.status(201).json(user.dataValues)
            }
        } catch(err) {
            next(err)
            // if (err.message === "passlength") res.status(400).json({"err":"Password length has to be around 6 and 20"})
            // else if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError")
            // res.status(400).json(err)
            // else res.status(500).json(err)
        }
    }
    static async login(req,res,next) {
        const {email,password} = req.body
        try {
            if (!email || !password) throw new Error ("Login email/pass empty")
            else {
                const user = await User.findOne({where:{email}})
                if (!user) throw new Error ("Login not valid")
                else {
                    if (!bcrypt.compareSync(password,user.password)) throw new Error ("Login not valid")     
                    else {
                        const access_token = jwt.sign({
                            id:user.id,
                            email:user.email
                        },process.env.JWT_SECRET)
                        res.status(200).json({access_token})
                    }
            }}
        } catch(err) {
            next(err)
            // if(err.message === "Login not valid") res.status(400).json({"err":"Username/password didn't match"})
            // else if(err.message === "Login email/pass empty") res.status(400).json({"err":"Please fill in the required information"})
            // else res.status(500).json(err)
        }
    }
}

module.exports = UserController