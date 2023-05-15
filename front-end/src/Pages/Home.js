import { useEffect } from "react";
import Banner from "../Components/Banner";
import CardComp from "../Components/CardComp";
import {useDispatch,useSelector} from 'react-redux'
import { fetchProducts } from "../RTK/Slices/ProductSlice";
import Cart from "./Cart";

function Home(){
    const productsData = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);
    console.log(productsData.products);
    return(
        <>
        <Banner/>
        {
            productsData.products?(
                productsData.products.map(product=>{
                    return(
                        <>
                        <h1>{product.name}</h1>
                        </>
                    )
                })
            ):<p>Loading...</p>
        }
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <Cart/>
        </>
    )
}

export default Home;