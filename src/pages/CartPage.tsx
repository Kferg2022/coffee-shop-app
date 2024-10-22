import React from 'react';
import { Cart } from '../components/Cart';

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
        Your Cart
      </h1>
      <Cart />
    </div>
  );
};

export default CartPage;