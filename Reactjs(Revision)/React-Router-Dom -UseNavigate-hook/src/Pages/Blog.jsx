import React from 'react'
import { useNavigate} from 'react-router-dom'
const Blog = () => {

const navigate = useNavigate()  

const gotoAbout =()=>{
 navigate('/Abotus')
}
  return (
    <div>
      <h1 className='heading'>This is a Blog Page</h1>
      <button className='p-2 bg-blue-400 rounded-md' onClick={()=>{gotoAbout()}}>Go to About Page</button>
    </div>
  )
}

export default Blog
