import { createContext, useReducer } from "react";
import { cartreducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {

              const [state, dispatch] = useReducer(cartreducer,{cart:[]})
    return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>;

}
export default Context;