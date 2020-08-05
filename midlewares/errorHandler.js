const errorHandler = (err, req, res, next) => {

  switch (err.name) {
    case 'You dont have quentity id':
      res.status(400).json({
        error: err.name
      })

      break;
    case 'SequelizeUniqueConstraintError':
      res.status(400).json({
        error: 'Your Email already exist'
      })
      
      break;
    case 'SequelizeValidationError':
      let list = []
      err.errors.forEach(error => {
        list.push(error.message)
      })
      res.status(400).json({
        error: list
      })
      break;
    case 'Invalid email & password!':
      res.status(400).json({
        error: err.name
      })
      
      break;
    case 'You are unauthenticated to make this request':
      res.status(401).json({
        error: err.name
      })

      break;
    case 'You are unauthorized to make this request':
      res.status(401).json({
        error: err.name
      })

      break;
    case 'JsonWebTokenError':
      res.status(400).json({
        error: 'You have invalid token, please login!'
      })

      break;
    case 'Todo doesn\'t exist':
      res.status(404).json({
        error: err.name
      })

      break;
    default:
      console.log(err.name)
      res.status(500).json({
        error: "Internal Server Error"
      })
  }
}

module.exports = errorHandler