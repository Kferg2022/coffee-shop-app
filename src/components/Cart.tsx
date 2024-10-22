import React from 'react'
import { useCart } from '../context/CartContext'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ScrollArea } from './ui/scroll-area'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
        <CardDescription>You have {cartItems.length} items in your cart.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
        <Button onClick={clearCart}>Clear Cart</Button>
      </CardFooter>
    </Card>
  )
}