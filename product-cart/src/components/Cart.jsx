import React from 'react';

export default function Cart({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onConfirm,
  onStartNew
}) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg sticky top-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="mb-4 flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">
                  {item.price} Rwf x {item.quantity}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onDecrease(item)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <button
                  onClick={() => onIncrease(item)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
                >
                  +
                </button>
                <button
                  onClick={() => onRemove(item)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold text-right text-gray-800">
              Total: {total} Rwf
            </p>
            <div className="mt-4 flex gap-2 justify-center">
              <button
                onClick={onConfirm}
                className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-sm"
              >
                Confirm Order
              </button>
              <button
                onClick={onStartNew}
                className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 text-sm"
              >
                Start New Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
