const express = require('express');
const router = express.Router();

const { Category, validate } = require('../models/category.model');

router.get('/', async (req, res) => {
    const categories = await Category.find().sort({ name: 1 });
    res.send(categories);
});

router.post('/', (req, res) => {
    const { error } = validate(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    const category = new Category({
        name: req.body.name
    });

    await category.save();

    res.send(category);
});

module.exports = router;