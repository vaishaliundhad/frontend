import React, { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import {  useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/action/CartAction";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

  
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => setProducts(res))

    }, []);

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
        navigate("/cart");
    }
    return (
        <div className="container mx-auto p-5">
            <h2 className="text-3xl font-bold text-center my-6">Products</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                        <img
                            src={product.image}
                            alt=""
                            className="w-32 h-32  mx-auto my-3"
                        />
                        <h3 className="text-lg font-semibold text-center">{product.title}</h3>
                        <p className="text-sm text-gray-600 text-center line-clamp-2">{product.description}</p>
                        <h3 className="font-bold text-center text-green-700">₹{product.price}</h3>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 w-full duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;