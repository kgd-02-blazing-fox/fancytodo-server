let errorHandler = (err,req,res,next)=>{
  let status, msg
  if(err.name === "SequelizeValidationError"){
    status = 400
    msg = "Bad Request"

  } else if (err.name === "Unauthorized") {
    status = 401
    msg = err.msg
  } else if (err.name === "Data Not Found") {
    status = 404
    msg = err.msg
  } else {
    status = 500
    msg = "Internal server error"
  }

  res.status(status).json({
    msg
  })
}

module.exports = errorHandler