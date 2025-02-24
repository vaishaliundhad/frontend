import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {

  const navigate = useNavigate();

  const gotohome =()=>{
    navigate("/");
  }

  const goback =()=>{
    navigate(-1);
  }
  return (
    <div className='text-center'>
      <h1 className='heading'>This is a Aboutus page</h1>
      <button className='bg-blue-600 p-2 rounded-md mt-10' onClick={()=>{gotohome()}}>GO To Home</button>
      <button className='bg-blue-600 p-2 rounded-md mt-10 ml-4' onClick={goback}>GO Back</button>
    </div>
  )
}

export default Aboutus
