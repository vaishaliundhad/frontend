import { ADD_TO_CART , REMOVE_TO_CART , CLEAR_CART } from "../Constant/CartConstant";

const initalState={
     cartItem:[],
}

export const  CartReducer =(state=initalState , action)=>{
   switch(action.type){
    case ADD_TO_CART:
        return{
            ...state , cartItem:[...state.cartItem , action.payload]
        }

    case REMOVE_TO_CART:   
      return{
        ...state , cartItem:state.cartItem.filter(item => item.id !== action.payload)
      };

    case CLEAR_CART:
        return{
            ...state , cartItem:[]
        }  
        default : return state;
   }

   

}