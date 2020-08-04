const { User, Todo } = require('../models/index')
const { verifyToken } = require('../helpers/jsonwebtoken')

async function authentication(req, res, next) {
  const token = req.headers.token
  try {
    if (!token) {
      throw { name: 'You are unauthenticated to make this request' }
    } else {
      console.log(token)
      const { email } = verifyToken(token)
      const user = await User.findOne({ where : { email }})
      if (!user) {
        throw { name: 'Your token invalid' }
      } else {
        req.userLogin = user
        next()
      }
    }
  } catch (err) {
    console.log(err)
    next({
      name: err.name
    })
  }
}



async function isOwner(req, res, next) {
  const id = req.params.id
  try {
    const todo = await Todo.findByPk(id)
    console.log(todo)
    if (!todo) {
      throw { name: 'Todo doesn\'t exist' }
    } else {
      if (todo.UserId !== req.userLogin.id) {
        throw { name: 'You are unauthorized to make this request' }
      } else {
        next()
      }
    }
  } catch (err) {
    next(err)
  }


}

module.exports = {
  authentication,
  isOwner
}
