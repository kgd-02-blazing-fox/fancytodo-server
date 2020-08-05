const express = require('express')
const router = express.Router()

const todoRoutes = require('./todo')
const restoRoutes = require('./restaurant')

const UserController = require('../controllers/userController')

router.get('/', (req, res) => {
  res.send('Hello World')
})
router.post('/register', UserController.postRegister)
router.post('/login', UserController.postLogin)
router.post('/login-google', UserController.postGoogleLogin)

router.use('/resto', restoRoutes)
router.use('/todos', todoRoutes)

module.exports = router