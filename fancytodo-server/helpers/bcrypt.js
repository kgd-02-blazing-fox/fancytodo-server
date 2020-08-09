const bcrypt = require('bcryptjs')

//untuk hash password

function hashPassword(password){
    const salt =bcrypt.genSaltSync(10)
    const hash =bcrypt.hashSync(password, salt)
    return hash
}

//untuk komparasi password asli dengan hashed

function comparePassword(password, hash){
    return bcrypt.compareSync(password, hash)
}

module.exports={
    hashPassword,
    comparePassword
}