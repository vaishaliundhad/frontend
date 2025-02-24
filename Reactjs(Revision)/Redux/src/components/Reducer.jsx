import { BUY_ITEM } from "./Constant";

const initalstate1= 20
const initalstate2= 40

const reducer =(state=initalstate1 , action)=>{
  switch(action.type){
    case BUY_ITEM:return state-1
    default:return state
  }
}

export const demoreducer =(state=initalstate2 , action)=>{
 switch(action.type)
 {
    case BUY_ITEM:return state-1 
    default : return state
 }
}

export default reducer