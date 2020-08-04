require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes/')
app.use(express.urlencoded({ extended: true })) // x-www-form-urlencoded
app.use(express.json()) // filetype json
app.use('/', routes)
const port = process.env.PORT

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})