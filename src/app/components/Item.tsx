
import React from 'react';
import Link from 'next/link';

// Sample products array (You can replace this with actual data)
const products = [
  {
    id: 1,
    name: 'Product 1',
    category: 'Category A',
    price: 29.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 20,
    image: '/image/multi bunch.webp', // Sample image URL
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category B',
    price: 39.99,
    countInStock: 5,
    rating: 4.0,
    numReviews: 15,
    image: '/image/multi flower.webp',
  },
  {
    id: 3,
    name: 'Product 2',
    category: 'Category c',
    price: 49.99,
    countInStock: 5,
    rating: 4.0,
    numReviews: 15,
    image: '/image/bunch flower.webp',
  },


  // Add more products as needed
];

export default function ProductList() {
  return (
    
    <div className=" bg-yellow-50 p-1 flex flex-wrap items-center justify-center mb-6" >
      
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-yellow-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-400 m-2"
        >
          <a href="#">
            <img className="rounded-t-lg w-full h-48 object-cover" src={product.image} alt={product.name} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">{product.category}</p>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">${product.price.toFixed(2)}</p>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">In Stock: {product.countInStock}</p>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Rating: {product.rating}</p>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Reviews: {product.numReviews}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
