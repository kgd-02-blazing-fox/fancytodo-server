const express = require('express');
const router = express.Router();
const {authentication, authorization} = require('../middlewares/auth.js')

const ToDoController = require('../controllers/todo-controller');

router.get('/', ToDoController.readToDo)
router.post('/', authentication, ToDoController.createToDo)
router.get('/mytodo', authentication, ToDoController.readToDoByUserId)
router.get('/:id', authentication, authorization, ToDoController.readToDoById)
router.put('/:id', authentication, authorization, ToDoController.updateToDo)
router.delete('/:id', authentication, authorization, ToDoController.deleteToDo)

module.exports = router;