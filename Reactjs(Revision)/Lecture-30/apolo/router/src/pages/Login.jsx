import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {

 const {isAuth , setIsAuth}= useAuth()

return (
    <div>
      <h1 className='heading'>This is Login Page Componenets</h1>
      {/* {
        isAuth ? <button className='btn' onClick={() => setIsAuth(false)}>Logout</button> :
      <button className='btn' onClick={() => setIsAuth(true)}>Login</button>
      } */}
      {
        isAuth ? <button  onClick={()=>setIsAuth(false)}>Logout</button>: 
        <button className='btn' onClick={()=> setIsAuth(true)}>Login</button>
      }
    </div>
  )
}

export default Login
