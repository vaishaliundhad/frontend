import './App.css'
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment, decrement } from './Redux/ProductSlice'
function App() {
  const data=useSelector((state)=>state.counter)
  const dispatch=useDispatch()

  return (
    <div className='text-center mt-4'>
       <div className='bg-green-800 p-2 mb-4'>{data}</div>
       <button onClick={()=>dispatch(increment())} className='p-4 bg-red-500'>Increment</button>
       <button onClick={()=>dispatch(decrement())} className='p-4 bg-red-500 ml-4'>Decrement</button>
    </div>
  )
}

export default App