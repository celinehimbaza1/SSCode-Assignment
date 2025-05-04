import React from 'react';

export default function ConfirmOrder({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          🎉 Your order has been placed!
        </h2>
        <button
          onClick={onClose}
          className="w-[120px] px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
}
