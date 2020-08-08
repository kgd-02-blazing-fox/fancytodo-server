const jwt = require('jsonwebtoken')

function signToken(payload){
    const token = jwt.sign(payload, 'secret')
    return token
}

function verifyToken(token,secret){
    jwt.verify(token, secret)
}

module.exports = {
    signToken,
    verifyToken
}