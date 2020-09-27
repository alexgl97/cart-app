import React, { useContext } from 'react';
import {CartContext} from './CartContext';
function Cars(props) {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        //to implement later
        const cars = {name: props.name, price: props.price};
        setCart(currentState => [...currentState, cars]);
    }
        return(
                <div>
                    <h2>{props.name}</h2>
                    <br />
                    <h4>{props.price}</h4>
                    <br />
                    <button onClick={addToCart}>Add to cart</button>
                </div>
        )
    }

    export default Cars;