import React from 'react'
import { NavLink, Outlet } from 'react-router'



const Navbar = () => {
    return (
        <>
            <div className="h-20 flex bg-gray-50 sticky top-0  shadow-md shadow-gray-600  overflow-hidden z-50">
               

                <div className='flex  justify-evenly items-center ml-[40%] '>

                    <nav className='flex gap-6 justify-evenly items-center '>
                        <ul className='gap-8 flex'>

                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/productlist">Product</NavLink>
                            <NavLink to="/cart">Cart</NavLink>
                            {/* <NavLink to="/financeList">FinanceList</NavLink> */}
                        </ul>
                    </nav>
                </div>
            </div>


            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar