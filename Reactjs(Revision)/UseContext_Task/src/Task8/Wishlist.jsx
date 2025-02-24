import React, { useContext } from 'react'
import { ProductContext, WishlistContext } from './Shop'

const Wishlist = () => {

  const { wishlist, removetask, handleclear } = useContext(WishlistContext);
  const { products } = useContext(ProductContext);

  const wishlistItems = products.filter((product) => wishlist.includes(product.id));

  return (
    <>
      { wishlistItems.length === 0 ? (
          <div className='text-center mt-4 font-bold text-xl'>Wishilist is empty.....!!!!😑🫠</div>
        ) : (
          <div className='grid grid-cols-4 m-10 gap-4'>
            {wishlistItems.map((item) => (
              <div key={item.id} className='h-auto w-60 shadow-xl m-auto'>
                <img src={item.images[0]} alt={item.title} className='h-40 w-40 m-auto' />
                <h3 className='m-2'>{item.title}</h3>
                <p className='m-2'>${item.price}</p>
                <button className='rounded p-2 text-center border bg-red-600  ' onClick={() => removetask(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )
      }
      <div className='text-center'>
        <button className='p-2 bg-red-600 mt-4 rounded-md ' onClick={handleclear}>Clear All</button>
      </div>
    </>
  )
}

export default Wishlist