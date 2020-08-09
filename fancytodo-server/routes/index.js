const express = require('express')
const router = express.Router()


const routerToDo = require('./todo')
const routerUser = require('./user')

router.use('/todos', routerToDo)
router.use('/user', routerUser)





module.exports = router

