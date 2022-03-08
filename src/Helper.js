
  
  
  
  import { cartContext } from '../src/Context/cartcontext';
  import React ,{ useContext } from 'react';
  
 export function Addtocart(element){
     const [cart, setCart] = useContext(cartContext);
           if(!cart.includes(element)){
            setCart(cart =>[...cart,element]);
         }
   }

export const API_URL = "http://localhost/codeigniter/api/"
  