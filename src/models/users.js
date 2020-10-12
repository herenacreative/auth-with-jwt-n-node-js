const conn = require('../helpers/database')
const { queryUser } = require('../helpers/query')

module.exports = {
  modelGetAllUser: () => {
    return new Promise((resolve, reject) => {
      conn.query(queryUser.get, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  },

  modelGetIdUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(queryUser.getId, id, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  },

  modelPatchUser: (setData, id) => {
    return new Promise((resolve, reject) => {
      conn.query(queryUser.patch, [setData, id], (err, result) => {
        if (err) {
          reject(err)
        }
        const newData = {
          id: result.insertId,
          ...setData
        };
        resolve(newData)
      })
    })
  },

  modelDeleteUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(queryUser.delete, id, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  },
}