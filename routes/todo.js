const express = require('express')
const TodoController = require('../controllers/todoController')
const { authentication, isOwner } = require('../midlewares/auth')

const router = express.Router()
router.post('/', authentication, TodoController.createTodo)
router.get('/', authentication, TodoController.getTodos)
router.get('/:id', authentication, isOwner, TodoController.getTodo)
router.put('/:id', authentication, isOwner, TodoController.putTodo)
router.delete('/:id', authentication, isOwner, TodoController.deleteTodo)
router.patch('/editStatus/:id', authentication, isOwner, TodoController.editStatus)
module.exports = router