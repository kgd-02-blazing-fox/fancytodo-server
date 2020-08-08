const express = require('express')
const router = express.Router()
const Controller = require('../controllers/todo')
const auth = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/', auth, Controller.postCreateTodo)
router.get('/', auth, Controller.getListTodos)
router.get('/:id',auth, authorization, Controller.getOneTodo)
router.put('/:id', auth, authorization, Controller.putTodo)
router.delete('/:id', auth, authorization, Controller.deleteTodo)


module.exports = router


