require('dotenv').config()
const express = require('express')
const routes = require('./routes/')
const port = process.env.PORT
const errorHandler = require('./midlewares/errorHandler')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})