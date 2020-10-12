const conn = require('../helpers/database')
const { queryProduct } = require('../helpers/query')

module.exports = {
  modelGetAllProduct: () => {
    return new Promise((resolve, reject) => {
      conn.query(queryProduct.get, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  },

  modelGetIdProduct: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(queryProduct.getId, id, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  },

  modelPostProduct: (setData) => {
    return new Promise((resolve, reject) => {
      conn.query(queryProduct.post, setData, (err, result) => {
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

  modelPatchProduct: (setData, id) => {
    return new Promise((resolve, reject) => {
      conn.query(queryProduct.patch, [setData, id], (err, result) => {
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

  modelDeleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(queryProduct.delete, id, (err, result) => {
        if (!err) {
          resolve(result)
        }
        reject(err)
      })
    })
  },
}