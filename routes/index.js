const express = require('express');
const router = express.Router();

const todos = require('./todo.js');
const users = require('./user.js');

router.use('/todos', todos)
router.use('/users', users)

module.exports = router