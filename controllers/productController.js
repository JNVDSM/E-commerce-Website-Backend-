const productModel = require('../models/productModel');

const getVendorProducts = (req, res) => {
    const { email } = req.query;
    
    if (!email) {
        return res.status(400).json({ error: 'Vendor email is required.' });
    }

    productModel.fetchVendorProducts(email, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};


const getUserProducts = (req, res) => {
    productModel.fetchUserProducts((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

module.exports = { getVendorProducts, getUserProducts };
