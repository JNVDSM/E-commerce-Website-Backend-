const db = require('../config/config');

const createUser = (name, email, hashedPassword, role_id, callback) => {
    db.query(`INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)`, 
        [name, email, hashedPassword, role_id], callback);
};

const getUserByEmail = (email, callback) => {
    db.query(`SELECT * FROM users WHERE email = ?`, [email], callback);
};

module.exports = { createUser, getUserByEmail };
