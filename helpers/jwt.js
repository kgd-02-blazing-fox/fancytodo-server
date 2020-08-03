const jwt = require('jsonwebtoken')

function sign(){
    const token = jwt.sign(payload, 'rahasia')
    return token
}

function verify(){
    if(token){
        return jwt.verify(token, 'rahasia')
    }
}



module.exports = { sign, verify }