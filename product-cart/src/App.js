import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ConfirmOrder from './components/ConfirmOrder';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (product) => {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (product) => {
    setCartItems(cartItems.map(item =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCartItems([]); // Clear cart
  };

  const handleStartNewOrder = () => {
    setCartItems([]);
  };

  return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto">
<div className="text-center mb-4 p-6 bg-white">
  <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 tracking-tight">
    StyleMart
  </h1>
  <p className="text-2xl text-green-700 mt-2 font-semibold">
    Your destination for trendy shoes, stylish clothes, and chic accessories.
  </p>
</div>





      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Product List */}
        <div className="flex-1">
          <ProductList onAdd={addToCart} />
        </div>

        {/* Cart */}
        <div className="w-full md:w-1/3 min-w-[300px] max-w-[400px]">
          <Cart
            cartItems={cartItems}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
            onConfirm={handleConfirmOrder}
            onStartNew={handleStartNewOrder}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ConfirmOrder onClose={handleCloseModal} />
      )}
    </div>
  );
}
