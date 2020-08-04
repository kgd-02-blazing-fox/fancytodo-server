const express = require('express');
const router = express.Router();

const authentication = require('../middlewares/authentication.js')
// const authorization = require('../middlewares/authorization.js')


const todos = require('./todo.js');
const users = require('./user.js');

router.use('/todos', authentication, todos)
router.use('/users', users)

module.exports = router