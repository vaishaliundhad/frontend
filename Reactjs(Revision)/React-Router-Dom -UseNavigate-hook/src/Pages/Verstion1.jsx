import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Aboutus from './Aboutus'
import Cart from './Cart'

const OldVerstion = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>Home</Route>
                     <Route path="aboutus" element={<Aboutus/>}>Aboutus</Route>
                     <Route path="cart" element={<Cart/>}>Cart</Route>
                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default OldVerstion
