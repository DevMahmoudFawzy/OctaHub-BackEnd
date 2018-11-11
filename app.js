const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const categories = require('./routes/categories');
const products = require('./routes/products');

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', '*');
        return res.status(200).json({});
    }
    next();
});

mongoose.connect('mongodb://localhost/octahub', { useNewUrlParser: true })
    .then(() => console.log('Connected To MongoDB...'))
    .catch(() => console.error('Could Not Connect To MongoDB...'));

app.get('/', (req, res) => {
    res.send('Hello OctaHub!');
});

app.use('/api/categories', categories);
app.use('/api/products', products);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Magic Happens on ${port}`));