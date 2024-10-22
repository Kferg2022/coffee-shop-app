import React from 'react';
import { Checkout } from '../components/Checkout';

const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
        Checkout
      </h1>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;