const { Todo, User } = require('../models/index')

class TodoController {

  static async createTodo(req, res, next) {
    const { title, description, due_date, status } = req.body
    try {
      const todo = await Todo.create({ title, description, due_date, status, UserId: req.userLogin.id })
      res.status(201).json(todo)
    } catch (err) {
      next(err)
    }
  }

  static async getTodos(req, res, next) {
    const UserId = req.userLogin.id
    try {
      const todos = await Todo.findAll({ where: { UserId } })
      res.status(200).json(todos)
    } catch (err) {
      next(err)
    }
  }

  static async getTodo(req, res, next) {
    const id = req.params.id
    try {
      const todo = await Todo.findOne({ where: { id: req.params.id } }) 
      res.status(200).json(todo)
    } catch (err) {
      next(err)
    }
  }

  static async putTodo(req, res, next) {
    const { title, description, status, due_date } = req.body
    const id = req.params.id
    try {
      const findTodo = await Todo.findOne({ where: { id } })
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
      next(err)
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
      next(err)
    }
  }
  static async editStatus(req, res, next) {
    const { status } = req.body
    const id = req.params.id
    try {
      const findTodo = await Todo.findOne({ where: { id } })
      if (!findTodo) {
        throw ({ name: "Todo not found" })
      } else {
        const updateTodo = await Todo.update({ status }, {
          where: {
            id: req.params.id
          }
        })
        res.status(200).json({
          msg: "Success update status todo"
        })
      }
    } catch (err) {
      next(err)
    }
  }
}


module.exports = TodoController
