import React from 'react';
import { useLocation } from 'react-router-dom';

const Wishlist = () => {
  const location = useLocation();
  const wishlist = location.state?.wishlist || [];

  return (
    <div>
      <h1 className="heading text-xl text-center mb-6">Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-x-2 object-cover">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-slate-100 w-[30%] border-2 border-black mt-4 p-4 flex flex-col items-center">
              <img src={item.thumbnail} alt={item.title} className="w-40 h-40 rounded-lg mb-4"/>
              <h2 className="text-2xl text-center mb-2">{item.title}</h2>
              <p className="text-center mb-2">{item.description}</p>
              <p className="font-medium text-lg text-green-600 mb-2">Price: ${item.price}</p>
              <p className="text-sm text-red-500 mb-2">Discount: {item.discountPercentage}%</p>
              <p className="text-sm text-gray-600 mb-4">Stock: {item.stock}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
