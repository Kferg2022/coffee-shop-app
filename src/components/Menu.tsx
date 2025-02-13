import React from 'react';
import { ProductCard } from './ProductCard';

interface Drink {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const drinksData: Drink[] = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and concentrated coffee shot",
    price: 2.5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 3.5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 3.75,
    image: "/placeholder.svg?height=100&width=100"
  }
];

export const Menu: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Menu</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {drinksData.map((drink) => (
            <ProductCard key={drink.id} drink={drink} />
          ))}
        </div>
      </div>
    </section>
  );
};