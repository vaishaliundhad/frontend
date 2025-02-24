import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../data.json';

const ShopPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const handleAddToWishlist = (item) => {
    if (!wishlist.some((wishItem) => wishItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }

  };

  const handleGoToWishlist = () => {
    navigate('/wishlist', { state: { wishlist } });
  };

  return (
    <div>
      <h1 className="heading text-xl text-center mb-6">Shop Page</h1>

      <div className="flex flex-wrap justify-center gap-x-2 object-cover">
        {jsonData.products.map((item) => (
          <div key={item.id} className="bg-slate-100 w-[30%] border-2 border-black mt-4 p-4 flex flex-col items-center" >
            <img src={item.thumbnail} alt={item.title} className="w-40 h-40 rounded-lg mb-4" />
            <h2 className="text-2xl text-center mb-2">{item.title}</h2>
            <p className="text-center mb-2">{item.description}</p>
            <p className="font-medium text-lg text-green-600 mb-2">Price: ${item.price}</p>
            <p className="text-sm text-red-500 mb-2">Discount: {item.discountPercentage}%</p>
            <p className="text-sm text-gray-600 mb-4">Stock: {item.stock}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600" onClick={() => handleAddToWishlist(item)} > Add to wishlist</button>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <button className="bg-green-500 text-white px-4 py-2 mt-6 rounded hover:bg-green-600" onClick={handleGoToWishlist} > Go to Wishlist</button>
      </div>
    </div>
  );
};

export default ShopPage;
