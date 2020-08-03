"use strict"

const express = require("express")
const router = express.Router()
const TodoControllers = require("../controllers/todocontrollers.js")

router.post("/",TodoControllers.postTodosHandler)
router.get("/",TodoControllers.getTodosHandler)
router.get("/:id",TodoControllers.getSpecificTodosHandler)
router.put("/:id",TodoControllers.putSpecificTodosHandler)
router.delete("/:id",TodoControllers.delSpecificTodosHandler)


module.exports = router