const {Todo} = require('../models/index')

function authorization(req,res,next){
    
    Todo.findByPk(req.params.id)
    .then((book)=>{
        if(book){
            if(book.UserId === req.currentUserId){
                next()
            } else{
                res.status(401).json({
                    message: "Unauthorized access"
                })
            }
        }else{
            res.status(404).json({
                message: "book not found"
            })
        }
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

module.exports = authorization