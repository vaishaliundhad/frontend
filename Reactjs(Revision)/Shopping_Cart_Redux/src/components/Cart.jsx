

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart, clearcart } from '../../redux/action/CartAction'

const Cart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.cartItem)

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {
                    cartItem.map((item) => (
                        <div key={item.id} className="border p-4 m-2 rounded shadow">
                            <img src={item.image} className='w-32 h-32  mx-auto my-3' alt="" />
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <button
                                onClick={() => dispatch(removeToCart(item.id))}
                                className="bg-red-500 text-white px-4 py-2 rounded m-2">
                                Remove Item
                            </button>
                        </div>
                    ))

                }

            </div>
            <div className='text-center'>
                <button onClick={() => dispatch(clearcart())} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 text-center">All Clear</button>
            </div>

        </div>
    )
}

export default Cart;
