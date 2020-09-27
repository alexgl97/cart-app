import React, { useContext } from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
        const [cart, setCart] = useContext(CartContext);
        const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0); 
        return(
            <div>
                <span>Items in the cart: {cart.length}</span>
                <br />
        <span>Total price: {totalPrice}</span>
            </div>
        )
    
}
export default Cart;