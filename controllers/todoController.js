const { Todo } = require('../models/index.js')

class todoController {
  static readTodo(req, res) {
    Todo.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static createTodo(req, res) {
    let input = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      Due_date: req.body.Due_date,
      userId : req.userId
    }
    Todo.create(input)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        if (err.name == 'SequelizeValidationError') {
          res.status(400).json({
            name: 'UncompleteInput',
            message: err.errors[0].message
          })
        } else {
          res.status(500).json(err)
        }
      })
  }

  static getSpesificTodo(req, res) {
    let id = req.params.id
    Todo.findOne({
      where: { id }
    })
      .then(data => {
        if(data == null){
        res.status(404).json({
          name: "NoData"
        })
        } else {
          res.status(200).json(data)
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updateSpesificTodo(req, res) {
    let id = req.params.id
    let input = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      Due_date: req.body.Due_date
    }

    Todo.update(input, {
      where: { id },
      returning: true
    })
      .then(data => {
        if(data[0] === 0){
          res.status(404).json({
            name: "Data Not Found"
          })
        } else {
          res.status(200).json(data[1][0])
        }
      })
      .catch(err => {
        if (err.name == 'SequelizeValidationError') {
          res.status(400).json({
            name: 'UncompleteInput',
            message: err.errors[0].message
          })
        } else {
          res.status(500).json(err)
        }
      })
  }

  static deleteTodo(req, res) {
    let id = req.params.id
    Todo.destroy({
      where: { id },
      returning: true
    })
      .then(data => {
        if(data === 0){
          res.status(404).json({
            name: "Data Not Found"
          })
        } else {
          res.status(200).json({
            msg: "delete complete"
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}



module.exports = { todoController }