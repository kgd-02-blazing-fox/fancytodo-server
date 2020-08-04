const express = require('express')
const router = express.Router()

const todoRoutes = require('./todo')
const UserController = require('../controllers/userController')

router.get('/', (req, res) => {
  res.send('Hello World')
})
router.post('/register', UserController.postRegister)
router.post('/login', UserController.postLogin)

router.use('/todos', todoRoutes)

module.exports = router