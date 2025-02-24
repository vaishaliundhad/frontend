import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Cart from './Cart'
import Aboutus from './Aboutus'

function NewVersion (){
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Navbar/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'cart',
                    element:<Cart/>
                },
                {
                   path:'Aboutus',
                   element:<Aboutus/>
                }
            ]
        }
    ])
    return(
        <div>
            <RouterProvider router={router}/>

           
        </div>
    )
} 

export default Verstion2
