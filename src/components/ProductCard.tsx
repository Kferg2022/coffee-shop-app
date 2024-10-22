import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useCart } from '../context/CartContext'

interface Drink {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface ProductCardProps {
  drink: Drink
}

export function ProductCard({ drink }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{drink.name}</CardTitle>
        <CardDescription>{drink.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          alt={drink.name}
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={200}
          src={drink.image}
          width={200}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-2xl font-bold">${drink.price.toFixed(2)}</span>
        <Button onClick={() => addToCart(drink)}>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}