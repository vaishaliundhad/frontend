import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import imag1 from '../assets/imag1.avif'
import image2 from '../assets/image2.webp'

const Navbar = () => {
    return (
        <>

            {/* <div className='h-20 flex bg-gray-50  sticky  shadow-md  shadow-gray-700 ml-4 overflow-x-hidden mr-4 mt-2'> */}

            <div className="h-20 flex bg-gray-50 sticky top-0 shadow-md shadow-gray-600  overflow-hidden z-50">
                <div className='font-bold items-center flex text-2xl'>
                    {/* <div className='ml-4'>Expense Tracker</div> */}
                    <img src={image2} alt="" className='h-16 mt-2 w-18 ml-8 border-2 bg-sky-300 mb-2 border-black shadow-xl shadow-gray-500 ' />
                </div>

                <div className='flex  justify-evenly items-center ml-[40%]'>

                    <nav className='flex gap-6 justify-evenly items-center '>
                        <ul className='gap-8 flex'>

                            <NavLink to="/AddExpense">Add</NavLink>
                            <NavLink to="/EditExpense">Display</NavLink>
                            <NavLink to="/ExpenseSummary">Total</NavLink>
                        </ul>
                    </nav>
                </div>
            </div>


            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Navbar;
