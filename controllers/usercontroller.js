"use strict"

const { User } = require("../models") 
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const {emailerReg} = require("../helper/emailer.js")
const {GemailerReg} = require("../helper/emailer.js")
const {OAuth2Client} = require("google-auth-library")

class UserController {
    static async register(req,res,next) {
        const {firstname,lastname,email,password} = req.body
        try {
            if (password.length<6 || password.length>20) throw new Error("Passlength")
            else {
                const user = await User.create({firstname,lastname,email,password})
                const access_token = jwt.sign({
                    id:user.id,
                    email:user.email
                },process.env.JWT_SECRET)
                emailerReg(firstname,lastname,email,password)
                res.status(201).json({user:user.dataValues,access_token})
            }
        } catch(err) {
            next(err)
        }
    }
    static async login(req,res,next) {
        try {
            if (!req.headers.google_token) {
            const {email,password} = req.body
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
            } else {
                const gClient = new OAuth2Client(process.env.GOOGLE_ID)
                const ticket = await gClient.verifyIdToken({
                    idToken:req.headers.google_token,
                    audience:process.env.GOOGLE_ID
                })
                const credential = ticket.getPayload()
                const user = await User.findOne({where:{email:credential.email}})
                if (user) {
                    const access_token = jwt.sign({
                        id:user.id,
                        email:user.email
                        },process.env.JWT_SECRET)
                    res.status(200).json({access_token})
                } else {
                    let randomstring = Math.random().toString(36).slice(-8);
                    const userCreate = await User.create({
                        firstname:credential.email.substring(0, credential.email.lastIndexOf("@")),
                        email:credential.email,
                        password: randomstring
                    })
                    const access_token = jwt.sign({
                        id:userCreate.id,
                        email:userCreate.email
                    },process.env.JWT_SECRET)
                    GemailerReg(credential.email.substring(0, credential.email.lastIndexOf("@")),credential.email,randomstring)
                    res.status(201).json({user:userCreate.dataValues,access_token})
                }
            }
        } catch(err) {
            next(err)
        }
    }
}

module.exports = UserController