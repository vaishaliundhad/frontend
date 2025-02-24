import './App.css'
import React from 'react'
import ProductList from './components/Productlist'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/productlist" element={<ProductList />}></Route>
      <Route path="/cart" element={<Cart />}></Route>

    </Route>
  )
)
function App() {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App