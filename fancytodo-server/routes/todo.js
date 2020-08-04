const express = require('express')
const router = express.Router()
const Controller = require('../controllers/todo')

router.post('/', Controller.postCreateTodo)
router.get('/', Controller.getListTodos)
router.get('/:id', Controller.getOneTodo)
router.put('/:id', Controller.putTodo)
router.delete('/:id', Controller.deleteTodo)


module.exports = router


