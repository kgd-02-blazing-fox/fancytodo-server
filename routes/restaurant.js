const express = require('express')
const router = express.Router()

const RestaurantController = require('../controllers/restaurantController')
router.get('/', RestaurantController.getRestaurant)

module.exports = router