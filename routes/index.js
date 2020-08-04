const express = require('express')
const router = express.Router()
const indexTodos = require('./todos.js')

router.use('/todos', indexTodos)

module.exports = router