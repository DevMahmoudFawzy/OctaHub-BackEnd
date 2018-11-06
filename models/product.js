const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    image: {
        type: String,
        trim: true,
        maxlength: 200
    },
    category: {
        type: String // for now
    },
    numberInStock: {
        type: Number,
    }
});

const Product = mongoose.model('Product', schema);

module.exports.product = Product;