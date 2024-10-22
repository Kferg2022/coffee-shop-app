import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Welcome to Our Coffee Shop!
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Discover our delicious drinks and order online.
      </p>
      <Button asChild className="mt-8">
        <Link to="/menu">View Menu</Link>
      </Button>
    </div>
  );
};

export default Home;