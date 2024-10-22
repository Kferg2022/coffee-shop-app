import React from 'react';
import { OrderConfirmation } from '../components/OrderConfirmation';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
        Order Confirmation
      </h1>
      <OrderConfirmation />
    </div>
  );
};

export default OrderConfirmationPage;