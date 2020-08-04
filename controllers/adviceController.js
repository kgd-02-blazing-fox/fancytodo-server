const axios = require('axios');

class adviceController{
  static giveAdvice(req,res, next){
    try {
      axios({
        method: 'GET',
        url: 'https://api.adviceslip.com/advice'
      })
      .then(({data})=>{
        // console.log(data.slip.advice);
        res.status(200).json({
          advice: data.slip.advice
        })
      })
      .catch(err=>{
        next(err)
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = adviceController