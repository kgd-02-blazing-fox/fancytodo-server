"use strict"

const { User } = require("../models") 
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

class UserController {
    static async register(req,res,next) {
        const {firstname,lastname,email,password} = req.body
        try {
            if (password.length<6 || password.length>20) throw new Error("Passlength")
            else {
                const user = await User.create({firstname,lastname,email,password})
                res.status(201).json(user.dataValues)
            }
        } catch(err) {
            next(err)
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
        }
    }
}

module.exports = UserController