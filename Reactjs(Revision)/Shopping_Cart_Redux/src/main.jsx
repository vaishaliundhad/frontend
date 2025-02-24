import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../redux/Store.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
     
     <App/>
     
    </Provider>
  </StrictMode>

)
