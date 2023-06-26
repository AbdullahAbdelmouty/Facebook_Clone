const Cart = require('../models/cart');
const getAllCart = async(req,res)=>{
    try {
        const cartProducts = await Cart.find({});
        res.status(200).json({cartProducts,nHits: cartProducts.length})
    } catch (error) {
        res.status(404).json({msg:"empty cart"})
    }
}