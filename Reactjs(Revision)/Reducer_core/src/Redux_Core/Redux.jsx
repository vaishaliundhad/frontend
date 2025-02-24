import React from 'react'
import { createStore } from 'redux'
import { useDispatch , useSelector } from 'react-redux'

const buy =()=>{
  return{
    type:'BUY_ITEM_1'
  }
}

const initalstate =20 
const reducer =(state = initalstate , action)=>{
    switch(action.type){
        case 'BUY_ITEM_1':return state-1
        default: return state
    }
}
const Redux = () => {

  const data= useSelector(state => state)

  console.log('data' , data);
  
  const dispatch= useDispatch()

  return (
    <div>
      <h2>this is a react-redux</h2>
      <button onClick={()=>dispatch(buy())}></button>
    </div>
  )
}

export default Redux

export const store = createStore(reducer)