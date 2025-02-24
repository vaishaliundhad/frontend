import React from 'react'
import { useRouteError } from 'react-router-dom'

const CareerError = () => {

    const error = useRouteError()

  return (
    <div>
      <h1>
        <span>{error.message}</span>
      </h1>
    </div>
  )
}

export default CareerError
