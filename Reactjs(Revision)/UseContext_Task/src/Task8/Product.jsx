import React, { useContext, useState } from 'react';
import { ProductContext, WishlistContext } from './Shop';
import { FaRegHeart , FaHeart } from "react-icons/fa";

const Product = () => {
  const { products, loading } = useContext(ProductContext);
  const {wishlist , toggleWishlist} = useContext(WishlistContext);

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

  return (
      <div className='flex flex-wrap justify-center gap-x-2 object-cover m-4 '>
        {products.map((item) => (
          <div key={item.id} className='h-auto w-60  m-auto shadow-xl'>
            <img src={item.images[0]} alt={item.title} className='h-40 w-40 m-auto' />
            <h3 className='m-2'>{item.title}</h3>
            <p  className='m-2'>${item.price}</p>
            <button className='m-2 text-xl' onClick={() => toggleWishlist(item.id)}>
            {wishlist.includes(item.id) ? <FaHeart className="text-red-600" /> : <FaRegHeart/>}
            </button>
          </div>
        ))}
      </div>
  );
};

export default Product;
