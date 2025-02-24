import { ADD_TO_CART , REMOVE_TO_CART  , CLEAR_CART } from "../Constant/CartConstant";

export const addToCart =(product)=>({
    type:ADD_TO_CART,
    payload:product,
});

export const removeToCart =(id) =>({
    type:REMOVE_TO_CART,
    payload:id,
})

export const clearcart =()=>({
    type:CLEAR_CART
})