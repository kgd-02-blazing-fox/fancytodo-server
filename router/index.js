"use strict"

const router = require('express').Router()
const todos = require("./todos.js")
const UserController = require("../controllers/usercontroller.js")
const Access = require("../middlewares/access.js")

router.use("/todos" ,Access.authenticate, todos)
router.post("/register",UserController.register)
router.post("/login",UserController.login)

module.exports = router
