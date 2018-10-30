const Joi = require('joi');
const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
];

router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id == parseInt(req.params.id));
    if (productIndex == -1) // 404
    {
        return res.status(404).send('Product Not Found');
    }
    res.send(products[productIndex]);
});

router.post('/', (req, res) => {

    const { error } = validateProduct(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const product = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(product);
    res.send(product);
});

router.put('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Product Not Exist');
    }

    const { error } = validateProduct(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    product.name = req.body.name;
    res.send(product);
});

router.delete('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Product Not Exist');
    }

    const productIndex = products.indexOf(product);
    products.splice(productIndex, 1);

    res.send(product);
});

function validateProduct(product) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(product, schema);
}

module.exports = router;