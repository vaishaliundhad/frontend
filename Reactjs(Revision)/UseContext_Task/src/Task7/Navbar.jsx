import React from 'react'
import { CiHeart } from "react-icons/ci";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='bg-lime-300'>
            <div className='p-4 flex  justify-center space-x-8'>
                <NavLink to="/ShopPage">Shop</NavLink>
                <div className='text-2xl border-red-500'>
                    <NavLink to="/Wishlist"> <CiHeart /></NavLink>
                </div>

            </div>

        </div>
    )
}

export default Navbar
