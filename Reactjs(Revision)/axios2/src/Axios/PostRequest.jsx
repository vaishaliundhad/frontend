import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const PostRequest = () => {
  const [name , setname]=useState("")
  const [email, setemail]=useState("")
  const [phone, setphone]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
  
    try{
      let response = axios.post('http://localhost:3000/profile', {name, email, phone})
      console.log(response.data);
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={(e)=>setname(e.target.value)}/>
        <input type="email" name="" id="" onChange={(e)=>setemail(e.target.value)}/>
        {/* <input type="tel" name="" id="" onChange={(e)=>setphone(parseInt(e.target.value))}/> */}
        <input type="tel" name="" id="" onChange={(e)=>setphone(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default PostRequest
