const {User} = require('../models/index')
const jwt = require('jsonwebtoken')

function authentication(req,res,next){

    try{
        const payload = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
        console.log(payload)
        User.findOne({
            where: {
                email: payload.email
            }
        })
        .then((user)=>{
            if (user){
                req.currentUserId = user.id
                next()
            } else{
                res.status(401).json({
                    message: 'invalid token'
                })
            }
        })
        .catch((err)=>{
            res.status(500).json(err)
        })

    } catch{
        res.status(401).json({
            message: "invalid token"
        })
    }
  
}

module.exports = authentication