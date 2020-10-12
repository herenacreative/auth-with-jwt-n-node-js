const { response } = require('../helpers/index')
const { modelRegister, modelLogin } = require('../models/auth');
const { comparePassword, createToken, hashPassword } = require('../helpers/security');

module.exports = {
  login: async (req, res) => {
    try {
      const setData = req.body
      const checkUser = await modelLogin(setData.email)
      if (checkUser < 1) {
        const message = `Sorry. We couldn't find an account with that email.`
        return response(res, null, 'failed', 404, message)
      }
      const userData = checkUser[0]
      const checkPassword = comparePassword(userData.password, setData.password)
      if (!checkPassword) {
        return response(res, null, 'failed', 401, 'Email or password is wrong')
      }
      delete userData.password;

      userData.tokenType = 'login';
      userData.tokenLogin = createToken({ ...userData });
      userData.tokenType = 'refresh';
      userData.tokenRefresh = createToken({ ...userData });

      delete userData.tokenType;
      return response(res, userData, 'success', 201, "Login Success")

    } catch (error) {
      console.log(error)
      return response(res, null, 'failed', 500, 'Internal Server Error');
    }
  },

  register: async (req, res) => {
    try {
      const setData = req.body;
      setData.role = 3
      const checkUser = await modelLogin(setData.email)
      if (checkUser.length > 0) {
        const message = `Sorry this account is already registered`;
        return response(res, null, 'failed', 409, message)
      }
      setData.password = hashPassword(setData.password)
      const register = await modelRegister(setData);
      if (register.affectedRows > 0) {
        const payload = {
          id: register.insertId,
          email: setData.email,
          role: setData.role,
        }
        return response(res, payload, 'success', 201, 'Success Register');
      }
      return response(res, null, 'success', 500, 'Internal Server Error');
    } catch (error) {
      console.log(error)
      return response(res, null, 'failed', 500, 'Internal Server Error');
    }
  }
}