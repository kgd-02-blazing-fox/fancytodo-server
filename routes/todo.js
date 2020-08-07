const express = require('express');
const router = express.Router();

const { todoController } = require('../controllers/todoController.js');
// const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

//todos
router.get('/', todoController.readTodo)

router.post('/', todoController.createTodo)

router.get('/:id', authorization, todoController.getSpesificTodo)

router.put('/:id', authorization, todoController.updateSpesificTodo)
// router.put('/:id', authorization, function test(req,res){
//   console.log(req.body, 'params nya sampe');
// })

router.delete('/:id', authorization, todoController.deleteTodo)

module.exports = router;