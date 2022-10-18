const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "please input an id"]
    },
    name:{
        type: String,
        required: [true, "please input a name"]
    },
    price: {type: Number, required: true}
});

module.exports = mongoose.model('product', productSchema)