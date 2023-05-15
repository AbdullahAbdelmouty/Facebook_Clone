import {configureStore} from '@reduxjs/toolkit';
import ProductSlice from './Slices/ProductSlice';
import CartSlice from './Slices/CartSlice';

export const store = configureStore(//store like a server for front end, it contain all data the fetched from db
                                    //to make it centerlized for all website pages.
    {
        reducer:{// it allow us to acess data from store
            products: ProductSlice,
            cart: CartSlice
        }
    }
)