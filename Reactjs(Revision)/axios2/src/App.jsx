import { useState } from 'react'
import GetRequest from './Axios/GetRequest'
import PostRequest from './Axios/PostRequest'
import './App.css'

function App() {

  return (
    <>
     <GetRequest/>
     <PostRequest/>
    </>
  )
}

export default App
