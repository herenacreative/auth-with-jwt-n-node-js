const { response } = require('../helpers/index');
const {hashPassword} = require('../helpers/security')
const { 
  modelGetAllUser,
  modelGetIdUser,
  modelPatchUser,
  modelDeleteUser
} = require('../models/users');


module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const result = await modelGetAllUser();
      return response(res, result, 'success', 200, 'Success Get All Users');
    } catch (error) {
      console.log(error)
      return response(res, null, 'failed', 500, 'Internal Server Error');
    }
  },

  getIdUsers: async (req, res) => {
    const id = req.params.id
    try {
      const result = await modelGetIdUser(id);
      return response(res, result, 'success', 200, 'Success Get All Users');
    } catch (error) {
      console.log(error)
      return response(res, null, 'failed', 500, 'Internal Server Error');
    }
  },

  patchUsers: async (req, res) => {
    const id = req.params.id
    const setData = req.body
    try {
      const checkUser = await modelGetIdUser(id)
      if(checkUser.length > 0){
        setData.password = hashPassword(setData.password);
        const result = await modelPatchUser(setData, id)
        return response(res, result, 'success', 201, `Success Update User ID ${id}`)
      }
      return response(res, null, 'failed', 404, 'Data Not Fpund');
    } catch (error) {
      console.log(error)
      return response(res, null, 'failed', 500, 'Internal Server Error');
    }
  },

  deleteUsers: async (req, res) => {
    const id = req.params.id
    try {
      const result = await modelDeleteUser(id);
      return response(res, result, 'success', 200, 'Success Get All Users');
    } catch (error) {
      console.log(error)
      return response(res, null, 'failed', 500, 'Internal Server Error');
    }
  },

}