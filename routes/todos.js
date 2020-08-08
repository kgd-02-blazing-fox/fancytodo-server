const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/TodoControllers.js')

const authentication = require('../middlewares/authetication.js')
const authorization = require('../middlewares/authorization.js')

router.post("/",TodoController.postTodosHandler)
router.get("/",TodoController.getTodosHandler)
router.get("/completed",TodoController.getShowCompleteHanler)
router.get("/:id",TodoController.getSpecificTodosHandler)
router.put("/:id",authorization,TodoController.putSpecificTodosHandler)
router.delete("/:id",authorization,TodoController.delSpecificTodosHandler)




module.exports = router