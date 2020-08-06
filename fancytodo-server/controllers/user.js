const {User} = require('../models/index.js')
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
            res.status(201).json(data)
        })
        .catch((err)=>{
            res.status(400).json(err)
        })
    }
    static postLogin(req,res){
      
    }

}

module.exports = userController