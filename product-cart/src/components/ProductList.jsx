import React, { useEffect, useState } from 'react';
import data from '../data.json';

export default function ProductList({ onAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
        >
          
          {product.image && (
            <img
              src={process.env.PUBLIC_URL + product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}

          <h3 className="text-lg font-semibold text-gray-800">
            {product.name} - {product.price} Rwf
          </h3>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => onAdd(product)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
