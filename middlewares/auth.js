const { verifyToken } = require('../helpers/jwt.js')
const { User, ToDo } = require('../models/index.js')

async function authentication(req, res, next) {
    let token = req.headers.token
    if (token) {

        try {
            let payload = verifyToken(token)

            let currentUser = await User.findOne({
                where: {
                    email: payload.email
                }
            })

            if (currentUser) {
                req.currentUser = currentUser
                next();
            } else {
                next ({
                    code: "401",
                    message: "Please login first!"
                })
            }

        } catch (err) {
            next ({
                code: "500",
                message: "Internal server error"
            })
        }

    } else {
        next ({
            code: "401",
            message: "Please login first!"
        })
    }
}

async function authorization(req, res, next) {
    let todoId = Number(req.params.id)
    try {
        let currentToDo = await ToDo.findByPk(todoId)

        if (currentToDo) {
            if (currentToDo.UserId == req.currentUser.id) {
                next();
            } else {
                next ({
                    code: "401",
                    message: "You dont have an authorize for this data!"
                })
            }
        } else {
            next ({
                code: "404",
                message: "Not Found"
            })
        }

    } catch (err) {
        next ({
            code: "500",
            message: "Internal server error"
        })
    }
}

module.exports = { authentication, authorization }