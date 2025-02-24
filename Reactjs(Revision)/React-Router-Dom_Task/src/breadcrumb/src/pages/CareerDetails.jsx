import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {

    const {id} = useParams()

    const career = useLoaderData()

  return (
    <div>
      <h1 className='heading'>This is Details Page {id}</h1>
      <div>
        <h2>{career.title}</h2>
        <p>{career.body}</p>
      </div>
    </div>
  )
}

export const CareerDetailsData = async({params}) => {
    const {id} = params
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)

    if(!res.ok){
        throw Error('Data Not Available!!!!!!!')
    }
    

    return res.json()
}

export default CareerDetails
