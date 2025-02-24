import React from 'react'
import { useRef } from 'react'

const Own = () => {

  const refDiv = useRef()

  const handlestyle =()=>{
    refDiv.current.style.backgroundColor ="red"
    refDiv.current.style.height ='100px'
    refDiv.current.style.width='100px'
  }

  return (
    <div className='text-center'>
      <div ref={refDiv}></div>
      <button onClick={handlestyle} className='border-2 border-solid border-black p-2 text-center'>click</button>
    </div>
  )
}

export default Own
