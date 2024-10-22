import React from 'react';
import { Menu } from '../components/Menu';

const MenuPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
        Our Menu
      </h1>
      <Menu />
    </div>
  );
};

export default MenuPage;