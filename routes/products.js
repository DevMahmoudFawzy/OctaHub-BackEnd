const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { product } = require('../models/product');

router.get('/', async (req, res) => {
    const products = await product.find().sort({ name: 1 });
    res.send(products);
});

module.exports = router;