const express = require('express');
const router = express.Router();

const { Controller } = require('../controllers/todo-controller.js');

//todos
router.get('/', Controller.readTodo)

router.post('/', Controller.createTodo)

router.get('/:id', Controller.getSpesificTodo)

router.put('/:id', Controller.updateSpesificTodo)

router.delete('/:id', Controller.deleteTodo)

module.exports = router;