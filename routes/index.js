const express = require('express')
const router = express.Router()
const indexTodos = require('./todos.js')
const UserController = require('../controllers/UserController.js')
const authentication = require('../middlewares/authetication.js')


router.use('/todos',authentication, indexTodos)

//User's Controller
router.post("/register", UserController.register)
router.post("/login", UserController.login)

module.exports = router