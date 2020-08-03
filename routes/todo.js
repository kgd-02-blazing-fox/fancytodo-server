const express = require('express');
const router = express.Router();

const { todoController } = require('../controllers/todoController.js');

//todos
router.get('/', todoController.readTodo)

router.post('/', todoController.createTodo)

router.get('/:id', todoController.getSpesificTodo)

router.put('/:id', todoController.updateSpesificTodo)

router.delete('/:id', todoController.deleteTodo)

module.exports = router;