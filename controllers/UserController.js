const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');


const getAllUsers = (req, res) => {
    userModel.fetchAllUsers((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};


const createStaff = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        userModel.insertStaff(name, email, hashedPassword, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Staff created successfully!' });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsers, createStaff };
