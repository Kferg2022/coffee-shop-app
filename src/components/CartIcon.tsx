import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartIcon: React.FC = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Link to="/cart" className="position-relative d-inline-block">
      <ShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartCount}
          <span className="visually-hidden">items in cart</span>
        </span>
      )}
    </Link>
  );
};

export default CartIcon;