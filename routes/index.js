const express = require('express')
const router = express.Router()

const todoRoutes = require('./todo')

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.use('/todos', todoRoutes)

module.exports = router