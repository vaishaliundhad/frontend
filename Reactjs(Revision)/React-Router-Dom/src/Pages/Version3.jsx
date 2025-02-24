import React from 'react'
import { createBrowserRouter , createRoutesFromChildren , Route, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Aboutus from './Aboutus'
import Cart from './Cart'
import Faq from './Faq'
import {Career , CareerLoader}from './Career'
import CareerLayout from './CareerLayout'
import HelpLayout from './HelpLayout'
import Contactus from './Contactus'


function Version() {
    const route=createBrowserRouter(
        createRoutesFromChildren(
            <Route path="/" element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<Aboutus/>}/>
               <Route path="cart" element={<Cart/>}/>
               <Route path="helplayout" element={<HelpLayout/>}>
                  <Route path="faq" element={<Faq/>}/>
                   <Route path="contactus" element={<Contactus/>}/>
               </Route>
               <Route path="career" element={<CareerLayout/>}>
                  <Route index element={<Career/>} loader={CareerLoader}/>
               </Route>

            </Route>
        )
    )
    return(
        <div>
            <RouterProvider router={route}/>
        </div>
    )
 
}
export default Version3
