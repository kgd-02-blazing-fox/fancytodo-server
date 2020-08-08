const { User } = require('../models/index.js')
const { verifyToken } = require('../helpers/jwt.js')


// const authentication = (req, res, next) => {
//   try {
//     console.log('test authentication')
//     console.log(req.headers.access_token)
//     if (req.headers.access_token) {
//       let verify = verifyToken(req.headers.access_token)
//       console.log(verify, 'verify')
//       User.findOne({
//         where: {
//           id: verify.id
//         }
//       })
//         .then((user) => {
//           req.currentUserId = user.id
//           console.log(req.currentUserId, 'success auth')
//           next()
//         })
//         .catch(next)
//     } else {
//       // console.log('gagal awal')
//       next({ name: 'Unauthenticated' })
//     }
//   } catch (err) {
//     // console.log('gagal akhir')
//     next({ name: 'Unauthenticated' })
//   }
// }

const authentication = async (req, res, next) => {
  try {
    console.log('test authentication')
    console.log(req.headers.access_token)
    if (req.headers.access_token) {
      let verify = verifyToken(req.headers.access_token)
      console.log(verify, 'verify')

      // User.findOne({
      //   where: {
      //     id: verify.id
      //   }
      // })
      //   .then((user) => {
      //     req.currentUserId = user.id
      //     console.log(req.currentUserId, 'success auth')
      //     next()
      //   })
      //   .catch(next)

      let data = await User.findOne({
        where: {
          id: verify.id
        }
      })
      if (data) {
        req.currentUserId = data.id
        console.log(req.currentUserId, 'success auth')
        next()
      }
    } else {
      // console.log('gagal awal')
      next({ name: 'Unauthenticated' })
    }
  } catch (err) {
    // console.log('gagal akhir')
    next({ name: 'Unauthenticated' })
  }
}

module.exports = authentication