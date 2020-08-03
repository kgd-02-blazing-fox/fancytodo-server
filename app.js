const express = require('express')
const app = express()

const routes = require('./routes/')

app.use('/', routes)
const port = 3000

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})