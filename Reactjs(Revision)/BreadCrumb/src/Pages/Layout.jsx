import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import AboutUs from './AboutUs'
import Help from './Help'
import Career from './Career'
import Home from './Home'
// import Product from './Product'
// import { ProductfetchData } from './Product'
// import { RouterProvider } from 'react-router'

// const Layout = () => {

//     const route = createBrowserRouter([
//         {
//             path:"/",
//             element:<Navbar/>,
//             children:[
//                 {
//                     path:"/",
//                     element:<Home/>
//                 },
//                 {
//                     path:"/aboutus",
//                     element:<AboutUs/>
//                 },
//                 {
//                     path:"/help",
//                     element:<Help/>
//                 },
//                 {
//                     path:"/career",
//                     element:<Career/>
//                 },
//                 {
//                     path:"/",
//                     element:<Product/>,
//                     loader:ProductfetchData
//                 }
//             ]
//         }
//     ])
//     return (
//        <RouterProvider router={route}/>

//     )
// }

// export default Layout
import { Route } from 'react-router-dom'

const Layout = () => {
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>Home</Route>
                <Route index={<Home/>} >Home</Route>
                <Route path="/about" element={<AboutUs />}>About</Route>
                <Route path="/help" element={<Help />}>Shop</Route>
                <Route path="/career" element={<Career/>}>Shop</Route>
            </Routes>
        </BrowserRouter>
    </>

}

export default Layout
