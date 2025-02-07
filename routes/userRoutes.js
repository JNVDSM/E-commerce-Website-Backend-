const express = require('express');
const { getAllUsers, createStaff } = require('../controllers/UserController');

const router = express.Router();


router.get('/users', getAllUsers);           
router.post('/staff', createStaff);     


module.exports = router;
