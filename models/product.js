const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "please input a name"]
    },
    price: {type: Number, required: true}
});

module.exports = mongoose.model('product', productSchema)