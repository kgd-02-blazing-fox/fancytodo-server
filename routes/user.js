const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers/userController.js');

//users
router.post('/register', UserController.registerUser)

router.post('/login', UserController.loginUser)

router.post('/googleLogin', UserController.googleLogin)

module.exports = router;