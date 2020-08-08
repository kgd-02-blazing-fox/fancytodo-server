const { Todo } = require('../models/index.js')

async function  authorization(req, res, next) {
  try {
    console.log(req.params.id,'<<<<<<<<<<<<<')

    const data = await Todo.findOne({
      where: {
        id: req.params.id
      }
    })
    console.log(data,'<<<<<<<<<<<<<')
    console.log(req.currentUserId,'>>>>>>>>>')

    if (data) {
      if (data.UserId == req.currentUserId) {
        next()
      } else {
        next({ name: 'Unauthorized' })
      }
    } else {
      next({
        name: 'NotFound',
        errors: [{ msg: 'Data Not Found' }]
      })
    }
  } catch (err) {
    next({ name: 'Unauthorized' })
  }
}

module.exports = authorization