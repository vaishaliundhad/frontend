import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const {setcuruser , curuser , setIsAuth}=useAuth();
    const navigate = useNavigate();


   
    const handleLogout =()=>{
        
        setIsAuth(false);
        setcuruser({});// usrname and password clear
        navigate("/login");
    }
    
  return (
    <div className='text-center'>
      <h1 className='heading mb-4'>This is Profile page</h1>
      <div>
        {Object.keys(curuser).length === 0 ? <p>user not  Available</p> : <p className='bg-slate-400 p-4'>username:{curuser.username}, password:{curuser.password}</p>}
        {Object.keys(curuser).length === 0 ? "": <button onClick={handleLogout} className='p-4 bg-teal-800 rounded py-2 mt-4 text-white'>logout</button>}
      </div>
    </div>
  )
}

export default Profile
