const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/global');

module.exports = {
    hashPassword(password){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash
    },

    comparePassword(password1, password2){
        return bcrypt.compare(password1, password2);
    },

    createToken(payload, expire = null){
        if(expire){
            return jwt.sign(payload, config.jwtSecretKey, expire)
        };
        return jwt.sign(payload, config.jwtSecretKey)
    },

    verifyToken(token){
        return jwt.verify(token, config.jwtSecretKey)
    }
}