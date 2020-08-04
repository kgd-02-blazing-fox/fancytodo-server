const express = require('express')
const app = express()

const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const indexRouter = require('./routes/index.js')

app.use('/', indexRouter)

app.listen(port, ()=>{
    console.log(`application is running at ${port}`)
})

