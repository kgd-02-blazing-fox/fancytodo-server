const express = require('express')
const router = express.Router()

const User = require('./user.js')

router.use('/users', User)

module.exports = router;