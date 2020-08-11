const { Todo } = require('../models/index.js')

let authorization = ( req, res, next )=>{
  Todo.findByPk(req.params.id)
  .then(todo=>{
    if(todo){
      if(todo.userId === req.userId){
        next()
      } else {
        res.status(401).json({
          msg: "Unathorized"
        })
      }
    } else {
      res.status(404).json({
        msg: "Todo not found"
      })
    }
  })
  .catch(err=>{
    next(err)
  })
}

module.exports = authorization