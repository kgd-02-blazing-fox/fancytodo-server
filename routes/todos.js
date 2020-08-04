const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/TodoControllers.js')

router.post("/",TodoController.postTodosHandler)
router.get("/",TodoController.getTodosHandler)
router.get("/:id",TodoController.getSpecificTodosHandler)
router.put("/:id",TodoController.putSpecificTodosHandler)
router.delete("/:id",TodoController.delSpecificTodosHandler)

module.exports = router