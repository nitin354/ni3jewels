

export const cartreducer = (state,action) =>{

    const {cart,totalPrice,qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch(action.type){

        case "ADD_TO_CART":
            return {cart:[...cart,{...action.payload,qty:1}]}
        case "REMOVE_FROM_CART":
            return {cart:state.cart.filter((c)=>c.product_id !== action.payload.product_id),qty:0}
        case 'INC':
            product = cart.find((c)=>c.product_id === action.payload.product_id);
            index = cart.findIndex((c)=>c.product_id === action.payload.product_id);
            product.qty = product.qty + 1;
            cart[index] = product;
            return {cart: [...cart],  qty: updatedQty}
        case 'DES':
        product = cart.find((c)=>c.product_id === action.payload.product_id);
        index = cart.findIndex((c)=>c.product_id === action.payload.product_id);
        if(product.qty>1){
            product.qty = product.qty - 1;
            cart[index] = product;
            return {cart: [...cart],  qty: updatedQty}
        }
        
        default:
            return state;
    }
}