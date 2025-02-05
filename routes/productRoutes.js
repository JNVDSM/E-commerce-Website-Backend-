const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();

// Route to create a product (Admins, Vendors, Staff)
router.post('/add', upload.single('image'), createProduct);

// Route to get all products (Accessible by all users)
router.get('/list', getProducts);

module.exports = router;
