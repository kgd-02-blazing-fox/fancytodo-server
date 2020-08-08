const { Todo } = require('../models/index.js')

class TodoController {

  static async postTodosHandler(req, res) {
    let payload = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: new Date(req.body.due_date),
    }
    console.log(payload)
    try {
      const data = await Todo.create(payload)
      res.status(201).json(data.dataValues)
    }
    catch (err) {
      if (err.name === "SequelizeValidationError") {
        res.status(400).json(err)
      } else {
        res.status(500).json(err)
      }
    }
  }

  static async getTodosHandler(req, res) {
    try {
      const list = await Todo.findAll({})
      res.status(200).json(list)
    } catch (err) {
      res.status(500).json(err)
    }

  }

  static async getSpecificTodosHandler(req, res) {
    try {
      const data = await Todo.findOne({
        where: {
          id: req.params.id
        }
      })
      if (!data) {
        throw new Error("NoData")
      } else {
        res.status(200).json(data)
      }
    } catch (err) {
      if (err.message == "NoData") {
        res.status(404).json({ 'error': "No Data" })
      } else {
        res.status(500).json(err)
      }
    }
  }

  static async putSpecificTodosHandler(req, res, next) {
    let payload = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: new Date(req.body.due_date),
    }
    console.log(payload)
    try {
      const dataSpesific = await Todo.findOne({
        where: {
          id: req.params.id
        }
      })
      if (dataSpesific) {
        const data = await Todo.update(payload, {
          where: {
            id: req.params.id,
            UserId: req.currentUserId
          },
          returning: true
        })
        if (!data[0]) {
          throw new Error("NoData")
        }
        else {
          res.status(200).json(data[1][0])
        }

      }
    } catch (err) {
      console.log(err)
      if (err.name === "SequelizeValidationError") {
        // res.status(400).json(err)
        next(err)
      } else if (err.message === "NoData") {
        // res.status(404).json({ 'error': "No Data" })
        next({
          name: 'NotFound',
          msg: 'Data Not Found'
        })
      } else {
        next(err)
      }
    }
  }

  static async delSpecificTodosHandler(req, res, next) {
    try {
      const findBefore = await Todo.findOne({
        where: {
          id: req.params.id
        }
      })
      if (!findBefore) {
        throw new Error("NoData")
      } else {
        const destroyed = await Todo.destroy({
          where: {
            id: req.params.id
          }
        })
        res.status(201).json(findBefore)
      }
    } catch (err) {
      if (err.message === "NoData") {
        // res.status(404).json({ 'error': "No Data" })
        next({
          name: 'NotFound',
          msg: 'Data Not Found'
        })
      } else {
        // res.status(500).json(err)
        next(err)
      }
    }
  }

  static getShowCompleteHanler(req, res, next) {
    console.log(req.currentUserId)
    Todo.findAll({ where: {
      UserId: req.currentUserId,
      status: 'done' } })
      .then((result) => {

        res.status(200).json(result)
      })
      .catch((err) => {
        next({
          name: 'NotFound',
          errors: [{ msg: 'Data Not Found' }]
        })
      })
  }

}

module.exports = TodoController