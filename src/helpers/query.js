module.exports = {
    queryUser : {
        get: `SELECT * FROM users`,
        getId: `SELECT * FROM users WHERE id = ?`,
        patch: `UPDATE users SET ? WHERE id = ?`,
        delete: `DELETE FROM users WHERE id = ?`
    },
    queryAuth : {
        register: `INSERT INTO users SET ?`,
        login: `SELECT * FROM users WHERE email = ?`
    },
    queryProduct : {
        get: `SELECT * FROM products`,
        getId: `SELECT * FROM products WHERE id = ?`,
        post: `INSERT INTO products SET ?`,
        patch: `UPDATE products SET ? WHERE id = ?`,
        delete: `DELETE FROM products WHERE id = ?`,
    }
}