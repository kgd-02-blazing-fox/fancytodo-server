const express = require('express');
const router = express.Router();

const ToDoRouter = require('./todo-router.js')
const UserRouter = require('./user-router.js')

router.use('/todos', ToDoRouter)
router.use('/user', UserRouter)

module.exports = router;