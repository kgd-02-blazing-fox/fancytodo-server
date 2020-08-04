const { Todo } = require('../models/index')

class TodoController {

  static async createTodo(req, res, next) {
    console.log(req.body)
    let { title, description, status, due_date } = req.body
    try {
      const todo = await Todo.create({ title, description, status, due_date })
      res.status(201).json(todo)
    } catch (err) {
      console.log(err)
      // res.status(500).json(err.name)
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }

  static async getTodos(req, res, next) {
    try {
      const todos = await Todo.findAll()
      res.status(200).json(todos)
    } catch (err) {
      console.log(err)
      // res.status(500).json(err.name)
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }

  static async getTodo(req, res, next) {
    try {
      const todo = await Todo.findOne({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(todo)
    } catch (err) {
      console.log(err)
      // res.status(500).json(err.name)
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }

  static async putTodo(req, res, next) {
    let { title, description, status, due_date } = req.body
    try {
      const findTodo = await Todo.findOne({
        where: {
          id: req.params.id
        }
      })
      if (!findTodo) {
        throw ({ name: "Todo not found" })
      } else {
        const updateTodo = await Todo.update({ title, description, status, due_date }, {
          where: {
            id: req.params.id
          }
        })
        res.status(200).json({
          msg: "Success update todo"
        })
      }
    } catch (err) {
      console.log(err)
      // res.status(500).json(err.name)
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }

  static async deleteTodo(req, res, next) {
    try {
      const findTodo = await Todo.findOne({
        where: {
          id: req.params.id
        }
      })
      if (!findTodo) {
        throw ({ name: "Todo not found" })
      } else {
        const todo = await Todo.destroy({
          where: {
            id: req.params.id
          }
        })
        res.status(200).json({
          msg: "Success delete todo"
        })
      }
    } catch (err) {
      console.log(err.name)
      // res.status(500).json(err.name)
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }
}

module.exports = TodoController
