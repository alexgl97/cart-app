import React from "react";
import Cars from './cars';

export const ProductList = () => {
    const database = [
        {name: "Red Porche", price: 90000.00, id: 1},
        {name: "Blue Buggati", price: 99000.00, id: 2},
        {name: "Green Dacia", price: 100000.00, id: 3},
    ]
    return(
        <div>
            {database.map(item => (
                <Cars name={item.name} price={item.price}
                key={item.id} />
            ))
            }
        </div>
    )
}