import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../RTK/Slices/CartSlice";

function Cart(){
    const productsCart = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCart())
    },[])
    console.log(productsCart.products);
    return(
        <>
        </>
    )
}

export default Cart;