const db = require('../config/config');

const checkRole = (email, roles, callback) => {
    db.query(`SELECT role_name FROM users INNER JOIN roles ON users.role_id = roles.id WHERE email = ?`, [email], (err, results) => {
        if (err) return callback(err, null);
        if (results.length > 0 && roles.includes(results[0].role_name)) return callback(null, true);
        return callback(null, false);
    });
};

module.exports = { checkRole };
