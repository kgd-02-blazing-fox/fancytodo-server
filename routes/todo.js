const express = require('express')
const router = express.Router()

const TodoController = require('../controllers/todoController')

router.post('/', TodoController.createTodo)
router.get('/', TodoController.getTodos)
router.get('/:id', TodoController.getTodo)
router.put('/:id', TodoController.putTodo)
router.delete('/:id', TodoController.deleteTodo)

module.exports = router