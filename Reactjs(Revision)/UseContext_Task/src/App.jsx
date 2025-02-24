import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Shop from './Task8/Shop'
import Product from './Task8/Product'
import Wishlist from './Task8/Wishlist'

import Navbar from './Task8/Navbar'

// import ShopPage from './Task7/ShopPage'
// import Wishlist from './Task7/Wishlist'
// import Navbar from './Task7/Navbar'



function App() {

  return (
    <>
{/* 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/ShopPage" element={<ShopPage />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>
        </Routes>
      </BrowserRouter> */}
<BrowserRouter>
<Navbar/>
<Routes>
 
 <Route path="/shop" element={<Shop><Product/></Shop>}></Route>
 <Route path="/wishlist" element={<Shop><Wishlist/></Shop>}></Route>
</Routes>

</BrowserRouter>


   


    </>
  )
}

export default App

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// // import App from './App';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// export default from './App'