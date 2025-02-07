const bcrypt = require('bcrypt');
const { createUser, getUserByEmail } = require('../models/userModel');
const {userSchema,loginSchema}=require("../validations/AuthenticationValidation")

const signup = async (req, res) => {
    const validateUser=await userSchema.validate(req.body)
    const { name, email, password, role_id } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(name, email, hashedPassword, role_id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'User registered successfully!' });
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const validateData=await loginSchema.validate(req.body)

    getUserByEmail(email, async (err, users) => {
        if (err) return res.status(500).json({ error: err });
        if (users.length === 0) return res.status(404).json({ error: "User not found!" });

        const user = users[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ error: "Invalid password" });

        res.json({ message: "Login successful", user });
    });
};

module.exports = { signup, login };
