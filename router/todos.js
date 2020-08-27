"use strict"

const router = require('express').Router()
const TodoController = require("../controllers/todocontroller.js")
const Access = require("../middlewares/access.js")

router.post("/",TodoController.post)
router.get("/",TodoController.get)
router.get("/:id",Access.todoModAuthorize,TodoController.getSpecific)
router.patch("/:id",Access.todoModAuthorize,TodoController.patchSpecific)
router.delete("/:id",Access.todoModAuthorize,TodoController.delSpecific)


module.exports = router