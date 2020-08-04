const express = require('express')
const router = express.Router()

const routerToDo = require('./todo')

router.use('/todos', routerToDo)




module.exports = router

