import React from 'react'
import {createStore} from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { buy } from './Action'

const Redux = () => {

    const data = useSelector(state => state)

    const dispatch = useDispatch()

  return (
    <>
    <div className='heading'>React-Redux Component</div>
    <p>Count : {data}</p>
    <button className='btn' onClick={() => dispatch(buy())}>click here</button>
    </>
  )
}

export default Redux;

