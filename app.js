"use strict"

require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const index = require("./router")
const jwt = require("jsonwebtoken")
const ErrorHandling = require("./middlewares/errorhandling.js")
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/",index)
app.use(ErrorHandling.generalErrorHandler)


app.listen(PORT, ()=>console.log(`Fancy Todo is listening at port:${PORT}`))