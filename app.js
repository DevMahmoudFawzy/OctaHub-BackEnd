const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/octahub', { useNewUrlParser: true })
    .then(() => console.log('Connected To MongoDB...'))
    .catch(() => console.error('Could Not Connect To MongoDB...'));

const products = require('./routes/products');

app.use('/api/products', products);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Magic Happens on ${port}`));