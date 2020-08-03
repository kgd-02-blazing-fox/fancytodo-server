const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers/todoController.js');

//users
router.post('/', UserController.registerUser)

router.post('/', UserController.loginUser)

module.exports = router;