import React, { useState,createContext, useReducer, useContext } from "react"
import { cartreducer } from "./Reducer";

export const cartContext = createContext();

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(cartreducer,{cart:[],totalPrice: 0,qty:0})
      
    return(

        <cartContext.Provider value={{state, dispatch}}>
            {props.children}
         </cartContext.Provider>
    )

}

export default CartContextProvider;

export const Cartstate =() =>{

    return useContext(cartContext)

}