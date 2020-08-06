const express = require('express')
const router = express.Router()

const ControllerUser = require('../controllers/user')

router.post('/register', ControllerUser.postRegister)
router.post('/login', ControllerUser.postLogin)


module.exports = router


