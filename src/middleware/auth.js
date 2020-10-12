const jwt = require('jsonwebtoken');
const config = require('../configs/global');
const { response } = require('../helpers/index');

module.exports = {
  verifyJwtToken(req, res, next) {
    const token = req.headers.authorization
    try {
      const decoded = jwt.verify(token, config.jwtSecretKey);
      if (decoded.tokenType !== 'login') {
        const message = {
          error: 'Wrong Token',
          message: 'Please use login token.'
        }
        return response(res, null, 'failed', 500, message)
      }
      req.decodedToken = decoded;
      next();
    } catch (error) {
      switch (error.name) {
        case 'TokenExpiredError':
          message = 'Please refresh your token'
          return response(res, null, 'failed', 500, message);
        case 'JsonWebTokenError':
          message = 'Please login'
          return response(res, null, 'failed', 500, message);
        default:
          console.log(error)
          message = 'Internal Server Error'
          return response(res, null, 'failed', 500, message)
      }
    }
  },
  checkRole: (roles) => (req, res, next) => {
    try {
      const role = req.decodedToken.role;
      if (roles.find(element => element === role)) {
        next();
      } else {
        return response(res, null, 'failed', 500, 'you dont have access')
      }
    } catch (error) {
      console.log(error);
      const message = `Internal Server Error`;
      return response(res, null, 'failed', 500, message)
    }
  }
}