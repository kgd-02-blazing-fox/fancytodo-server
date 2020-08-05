"use strict"

const {User,Todo} = require("../models")
const jwt = require("jsonwebtoken")

class Access {
    static async authenticate(req,res,next) {
        try {
            const token = jwt.verify(req.headers.access_token,process.env.JWT_SECRET)
            const user = await User.findOne({where:{email:token.email}})
            if (!user) throw new Error("Invalid token")
            else {
                req.access_id = user.id
                next()
            }
        } catch (err) {
            next(err)
        }
    }
    static async todoModAuthorize(req,res,next) {
        try {
            const todo = await Todo.findByPk(req.params.id)
            if (!todo) throw new Error("File not found")
            else if(todo.userId !== req.access_id) throw new Error("Unauthorized access")
            else next()
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Access