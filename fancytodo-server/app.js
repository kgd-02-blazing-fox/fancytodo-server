const express = require('express')
const app = express()
require('dotenv').config()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const indexRouter = require('./routes/index.js')

app.use('/', indexRouter)

app.listen(port, ()=>{
    console.log(`application is running at ${port}`)
})

