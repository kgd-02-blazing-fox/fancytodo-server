const express = require('express');
const router = express.Router();

const todos = require('./todo.js');

router.use('/todos', todos)

module.exports = router