let errorHandler = (err,req,res,next)=>{
  let status, msg
  if(err.name === "SequelizeValidationError"){
    status = 400
    msg = "Bad Request"
  } else {
    status = 500
    msg = "Internal server error"
  }

  res.status(status).json({
    msg
  })
}

module.exports = errorHandler