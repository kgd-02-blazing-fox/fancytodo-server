const axios = require('axios');

class adviceController{
  static giveAdvice(req,res, next){
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
  }

  static giveNews(req,res,next){
    axios({
      method: 'GET',
      url: `http://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.NEWS_API_KEY}`
    })
    .then(({data})=>{
      let x = Math.round(Math.random()*35)+1
      // console.log(data.articles[x]);
      res.status(200).json({
        title: data.articles[x].title,
        url: data.articles[x].url,
        source: data.articles[x].source.name,
      })
    })
    .catch(err=>{
      console.log(err);
      next(err)
    })
  }
}

module.exports = adviceController