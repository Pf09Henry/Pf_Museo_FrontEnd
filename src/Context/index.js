import React from 'react'
import { useLocalStorage } from './useLocalStorage';


export const CartContext = React.createContext();

export function CartProvider(props){

    const [products, saveProducts] = useLocalStorage('CART_V1', []);

    return(
        <CartContext.Provider value={{
            products,
            saveProducts
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
