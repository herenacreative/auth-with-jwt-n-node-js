const conn = require('../helpers/database')
const { queryAuth } = require('../helpers/query')

module.exports = {
  modelRegister: (setData) => {
    return new Promise((resolve, reject) => {
      conn.query(queryAuth.register, setData, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  },

  modelLogin: (setData) => {
    return new Promise((resolve, reject) => {
      conn.query(queryAuth.login, setData, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  }
}

