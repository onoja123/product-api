const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "please input a name"]
    },
    model: {
        type: String,
        required: [true, "please input a model"]
    },
    expiryDate: {
        type: Number,
        required: [true, "please input an expiry date"]
    },
    price: {type: Number, required: true}
});

module.exports = mongoose.model('product', productSchema)