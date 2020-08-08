if (process.env.NODE_ENV == 'development') {
  console.log(`Starting ....`)
  require('dotenv').config()
}
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const indexRoute = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler.js')

app.use('/',indexRoute)


app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Connection to port https://localhost:${PORT}`)
})
