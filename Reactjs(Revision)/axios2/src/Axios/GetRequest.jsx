import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'

const GetRequest = () => {
    const [data, setData]=useState([])
    console.log(data);

    const handleData =()=>{
        let response = axios.get('http://localhost:3000/profile')
        .then((response)=>{
            setData(response.data)
        })
        .catch((err)=>{
          console.log(err);
          
        })
    }

    useEffect(()=>{
        handleData()
    },[])
    
  return (
    <div>
      {
        data.map((item)=>{
            return(
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    <li>{item.phone}</li>
                </ul>
            )
        })
      }
    </div>
  )
}

export default GetRequest
