const mongoose = require('mongoose');
const Joi = require('joi');

const Product = mongoose.model('Product', new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    numberInStock: {
        type: Number,
    }
}));

function validateProduct(product) {
    const schema = {
        name: Joi.string().required().min(3).max(50),
        price: Joi.number().required().min(1),
        image: Joi.string().max(200),
        categoryId: Joi.objectId().required(),
        numberInStock: Joi.number()
    }

    return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;