import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Coffee Shop</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground">Menu</Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground">About</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80 text-foreground">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link to="/cart">
            <Button className="relative">
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>Cart</span>
              <span className="ml-2 rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">0</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header