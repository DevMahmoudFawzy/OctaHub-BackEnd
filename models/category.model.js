const mongoose = require('mongoose');
const Joi = require('joi');

const Category = mongoose.model('Category', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    }
}));

function validateCategory(category) {
    const schema = {
        name: Joi.string().required().min(3)
    }

    return Joi.validate(category, schema);
}

exports.Category = Category;
exports.validate = validateCategory;