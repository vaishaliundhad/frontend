import React from 'react'
import { useSelector } from 'react-redux'
const Home = () => {
    const darkMode = useSelector((state)=>state.darkMode);
  return (
    <div className={`min-h-screen flex flex-col item-center justify-center transition-color ${darkMode ? "bg-gray-800 text-white" : "bg-blue-400 text-black"}`}>
      <h1 className='text-2xl font-bold text-center'>Welcome to Dark mode Example</h1>
    </div>
  )
}

export default Home
