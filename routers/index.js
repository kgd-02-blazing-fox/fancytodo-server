const express = require('express')
const router = express.Router()

const User = require('./user.js')
const Todo = require('./todo.js')

router.use('/users', User)
router.use('/todo.js', Todo)

module.exports = router;