const axios = require('axios')
class RestaurantController {
  static getRestaurant(req, res, next) {
    // console.log(req.query.entity_id)
    try {
      if (!req.query.entity_id) {
        throw { name: 'You dont have quentity id' }
      } else {
        axios({
          method: 'GET',
          url: `https://developers.zomato.com/api/v2.1/search`,
          params: {
            'entity_id': req.query.entity_id,
            'entity_type': 'city',
            'sort': 'rating',
            'count': 10
          },
          headers: {
            'user-key': process.env.ZOMATO_KEY
          }
        })
          .then(result => {
            res.status(200).json(result.data.restaurants)
          })
          .catch(next)
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = RestaurantController

// Bandung: 11052
// Jakarta: 74