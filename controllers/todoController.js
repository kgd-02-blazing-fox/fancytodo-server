const { Todo } = require('../models/index.js')

class todoController {
  static readTodo(req, res, next) {
    let id = req.userId
    // console.log(id);
    Todo.findAll({
      where: {userId:id}
    })
      .then(data => {
        // console.log(data);
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err, 'DI READ TODO CONTROLLER');
        next(err)
      })
  }

  static createTodo(req, res, next) {
    let input = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      Due_date: req.body.Due_date,
      userId: req.userId
    }
    try {
      Todo.create(input)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log(err);
        if (err.name == 'ValidationErrorItem') {
          next({
            name: 'Bad Request',
            mesg: err.errors[0].message
          })
        } else {
          next(err)
          // res.status(500).json(err)
        }
      })
    } catch (err) {
      next (err)
    }
  }

  static getSpesificTodo(req, res, next) {
    let id = req.params.id
      Todo.findOne({
        where: { id }
      })
        .then(data => {
          if (data == null) {
            next({
              name: "NoData"
            })
            // res.status(404).json()
          } else {
            res.status(200).json(data)
            // console.log(data);
          }
        })
        .catch(err => {
          next(err)
          // res.status(500).json(err)
        })
  }

  static updateSpesificTodo(req, res, next) {
    let id = req.params.id
    let input = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      Due_date: req.body.Due_date
    }
    // console.log(id);
    // console.log(input);
      Todo.update(input, {
        where: { id },
        returning: true
      })
        .then(data => {
          if (data[0] === 0) {
            next ({
              name: "Data Not Found",
              msg: "No such data"
            })
            // res.status(404).json()
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
            next(err)
            // res.status(500).json(err)
          }
        })
    
  }

  static deleteTodo(req, res, next) {
    let id = req.params.id
    Todo.destroy({
      where: { id },
      returning: true
    })
      .then(data => {
        if (data === 0) {
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