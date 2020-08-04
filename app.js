"use strict"

require("dotenv").config()
const express = require('express')
const app = express()
const PORT = 3000
const index = require("./router")
const jwt = require("jsonwebtoken")
const ErrorHandling = require("./middlewares/errorhandling.js")

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/",index)
app.use(ErrorHandling.generalErrorHandler)


app.listen(PORT, ()=>console.log(`Fancy Todo is listening at port:${PORT}`))