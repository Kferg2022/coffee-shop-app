import React from 'react'
import { useCart } from '../context/CartContext'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card'
import { ScrollArea } from './ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Link } from 'react-router-dom'

export function Cart() {
  const { cart, pupCups, removeFromCart, updateQuantity, updatePupCups, clearCart, getCartTotal } = useCart()

  const total = getCartTotal() // Ensure this is the total used consistently

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
        <CardDescription>You have {cart.length} items in your cart.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)} x 
                  <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-12 ml-2 p-1 border rounded"
                    min="1"
                  />
                </p>
              </div>
              <Button onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          ))}
          {total > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold">Pup Cups (Free)</h3>
              <Select value={pupCups.toString()} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updatePupCups(parseInt(e.target.value))}>
                <SelectTrigger>
                  <SelectValue>Select quantity</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="w-full flex justify-between mb-4">
          <span className="font-semibold">Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="w-full flex justify-between mb-4">
          <span className="font-semibold">Pup Cups:</span>
          <span>Free</span>
        </div>
        <div className="w-full flex justify-between mb-4">
          <span className="font-semibold text-lg">Total:</span>
          <span className="font-semibold text-lg">${total.toFixed(2)}</span>
        </div>
        <div className="w-full flex justify-between">
          <Button onClick={clearCart} variant="outline">Clear Cart</Button>
          <Link to="/checkout" className="button">Proceed to Checkout</Link>
        </div>
      </CardFooter>
    </Card>
  )
}



