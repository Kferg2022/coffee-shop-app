import drinksData from './path/to/drinks.json';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Menu = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get('/api/drinks');
        setDrinks(response.data);
      } catch (error) {
        console.error("Error fetching drinks data", error);
      }
    };
    fetchDrinks();
  }, []);

  return (
    <div>
      {drinks.map(drink => (
        <ProductCard key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

