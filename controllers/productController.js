const { addProduct, getAllProducts } = require('../models/productModel');

const createProduct = (req, res) => {
    const { name, description, category, price_old, price_new, start_date, free_delivery, delivery_amount } = req.body;
    const imageUrl = req.file ? req.file.filename : null;
    const expiry_date = new Date(new Date(start_date).getTime() + 7 * 24 * 60 * 60 * 1000);

    addProduct({ name, description, category, price_old, price_new, start_date, expiry_date, free_delivery, delivery_amount, image_url: imageUrl }, 
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Product added successfully!' });
        }
    );
};

const getProducts = (req, res) => {
    getAllProducts((err, products) => {
        if (err) return res.status(500).json({ error: err });
        res.json(products);
    });
};

module.exports = { createProduct, getProducts };
