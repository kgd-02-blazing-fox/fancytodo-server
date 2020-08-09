const {User} = require('../models/index.js')
const{signToken, verifyToken} = require('../helpers/jwt')
const {comparePassword} = require('../helpers/bcrypt')

class userController{
    static postRegister(req,res){
        const payload = {
            email: req.body.email,
            password : req.body.password
        }
        console.log(payload)
        User.create(payload)
        .then((data)=>{
            console.log('create berhasil')
            res.status(201).json({
                id: data.id,
                email: data.email
            })
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    }
    static async postLogin(req,res){
        try{
            const payload = {
                email: req.body.email,
                password: req.body.password
            }

            const user = await User.findOne({
                where:{
                    email: payload.email
                }
            })

            if(!user){
                res.status(401).json({
                    name: "unauthorized",
                    message: "wrong email/password"
                })
            } else{
                const compare = comparePassword(payload.password, user.password)
                
                if (compare){
                    const accessToken = signToken({
                        email: user.email
                    })
                    console.log('login berhasil')
    
                    res.status(200).json({accessToken})
                } else{
                    res.status(401).json({
                        name: "unauthorized",
                        message: "wrong email/password"
                    })
                }
              
            }

        } catch(err){
            res.status(500).json(err)
        }
      
    }

}

module.exports = userController