"use strict"

const express = require('express')
const app = express()
const PORT = 3000
const index = require("./router")

app.use(express.urlencoded({extended:true}))


app.use("/",index)


app.listen(PORT, ()=>console.log(`Fancy Todo is listening at port:${PORT}`))