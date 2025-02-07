const express = require('express');
const { getVendorProducts, getUserProducts } = require('../controllers/productController');
const upload = require('../middlewares/uploadMiddleware');
const router = express.Router();


router.get('/vendor/products', getVendorProducts);  
router.get('/products', getUserProducts);          


module.exports = router;
