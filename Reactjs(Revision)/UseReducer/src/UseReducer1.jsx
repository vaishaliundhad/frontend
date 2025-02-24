import React, { useReducer } from 'react'
import UseReducer from './UseReducer'

const UseReducer1 = () => {
    const [state , dispatch]= useReducer(Reducer ,{
        age:10,
        count:40
    } );

    const Reducer = (state , action)=>{
     switch(action.type){
        case "increment" : return {
            age:state.age+1
        }
     }
    }
  return (
    <div>
      <h1 className='heading text-xl'>UseReducer</h1>

    </div>
  )
}

export default UseReducer1
