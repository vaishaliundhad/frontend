import './App.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from './Redux/ProductSlice';


function App() {

  const data = useSelector(state => state);
 
  const dispatch = useDispatch()
  console.log(data);

  
  return (
    <>
      <h1>This is a App components</h1>
       <div>{data}</div>
       <button onClick={()=> dispatch(increment())}></button>
       <button onClick={()=>dispatch(decrement())}></button>
       {/* <button onClick={()=> dispatch(incre())}></button> */}
    </>
  )
}

export default App