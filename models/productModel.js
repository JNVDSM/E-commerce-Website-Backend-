const db = require('../config/config');

const addProduct = (data, callback) => {
    db.query(
        `INSERT INTO products (name, description, category, price_old, price_new, start_date, expiry_date, free_delivery, delivery_amount, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.name, data.description, data.category, data.price_old, data.price_new, data.start_date, data.expiry_date, data.free_delivery, data.delivery_amount, data.image_url],
        callback
    );
};

const getAllProducts = (callback) => {
    db.query(`SELECT *, (price_old - price_new) AS discount_amount, ((price_old - price_new) / price_old * 100) AS discount_percentage FROM products`, callback);
};

module.exports = { addProduct, getAllProducts };
