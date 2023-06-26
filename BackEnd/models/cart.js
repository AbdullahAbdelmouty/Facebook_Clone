const mongoose = require('mongoose');
const product = require('./products');
const user = require('./user')
const cartSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    userId:{
        type: schema.Types.Number,
        ref: user,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
   products:[
        {
            productId:{
                type:schema.Types.Number,
                ref:product,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
   ]
})

module.exports = mongoose.model('cart',cartSchema);