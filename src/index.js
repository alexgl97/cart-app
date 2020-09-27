import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ProductList} from "./ProductList";
import Cart from './Cart';
import { CartProvider } from './CartContext';


const App =() =>{
  return(<CartProvider>
      <Cart />
      <ProductList />
      </CartProvider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

