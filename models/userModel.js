const db = require('../config/config');

const createUser = (name, email, hashedPassword, role_id, callback) => {
    db.query(`INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)`, 
        [name, email, hashedPassword, role_id], callback);
};

const getUserByEmail = (email, callback) => {
    db.query(`SELECT * FROM users WHERE email = ?`, [email], callback);
};


const fetchAllUsers = (callback) => {
    const sql = `SELECT users.id, users.name, users.email, roles.role_name 
                 FROM users 
                 INNER JOIN roles ON users.role_id = roles.id`;
    db.query(sql, callback);
};


const insertStaff = (name, email, hashedPassword, callback) => {
    const sql = `INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, 2)`;
    db.query(sql, [name, email, hashedPassword], callback);
};



module.exports = { createUser, getUserByEmail,fetchAllUsers,insertStaff };
