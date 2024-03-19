"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
    const [dishes, setDishes] = useState([]);
    const [cart, setCart] = useState([]);
    const [showReview, setShowReview] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data.json');
                setDishes(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const addToCart = (id) => {
        const dish = dishes.find(dish => dish.id === id);
        setCart(prevCart => [...prevCart, dish]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const toggleReviewPanel = () => {
        setShowReview(!showReview);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, current) => acc + Number(current.price), 0);
    };

    return (
        <div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 dark:bg-gray-900">
                {dishes.map(dish => (
                    <div key={dish.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 m-auto h-full flex flex-col">
                        <img className="w-full h-40 object-cover" src={dish.img} alt={`Image of ${dish.name}`} />
                        <div className="px-6 py-4 flex-grow">
                            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{dish.name}</div>
                            <p className="text-gray-700 dark:text-gray-400 text-base">
                                {dish.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {dish.tags.map(tag => (
                                <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-200 mr-2 mb-2">#{tag}</span>
                            ))}
                        </div>
                        <div className="px-6 pb-4 flex justify-between items-center">
                            <span className="inline-block bg-green-200 dark:bg-green-700 rounded-full px-3 py-1 text-sm font-semibold text-green-800 dark:text-green-300">₹{dish.price }</span>
                            <button onClick={() => addToCart(dish.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Bag</button>
                        </div>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="sticky inset-x-0 rounded-e-lg bottom-0 bg-gray-800 text-white py-4 px-6 flex justify-between items-center space-x-4 z-50">
                    <div className='flex gap-4'>
                    <span>Total Price: ₹{getTotalPrice().toFixed(2)}</span>
                        <span>Total Items: {cart.length}</span>
                  </div>  
                   <div className='flex gap-4'><button onClick={toggleReviewPanel} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Review Items
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Checkout
                    </button></div> 
                </div>
            )}

{showReview && (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center h-screen">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg max-w-2xl w-full max-h-[75vh]  overflow-y-scroll">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Review Your Cart</h2>
            <div className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <img src={item.img} alt={item.name} className="h-16 w-16 rounded-full object-cover mr-4" />
                            <div>
                                <p className="text-lg font-medium text-gray-900 dark:text-white">{item.name}</p>
                                <p className="text-gray-600 dark:text-gray-400">₹{item.price}</p>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 dark:hover:text-red-400 font-semibold">Remove</button>
                    </div>
                ))}
            </div>
           
            <div className="flex justify-between items-center mt-6 sticky bottom-0">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">Total: ₹{getTotalPrice().toFixed(2)}</span>
                <div className="flex space-x-4">
                    <button onClick={toggleReviewPanel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default Menu;
