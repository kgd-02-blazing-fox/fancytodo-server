"use strict"

const express = require("express")
const router = express.Router()
const Controllers = require("../controllers/controllers.js")

router.post("/",Controllers.postTodosHandler)
router.get("/",Controllers.getTodosHandler)
router.get("/:id",Controllers.getSpecificTodosHandler)
router.put("/:id",Controllers.putSpecificTodosHandler)
router.delete("/:id",Controllers.delSpecificTodosHandler)


module.exports = router