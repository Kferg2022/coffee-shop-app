import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card'
import { ScrollArea } from './ui/scroll-area'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function Checkout() {
  const { cart, pupCups, getCartTotal, clearCart } = useCart()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = getCartTotal()
    setTotal(newTotal)
    console.log('Cart updated in Checkout:', cart)
    console.log('New total in Checkout:', newTotal)
  }, [cart, getCartTotal])

  const handlePlaceOrder = () => {
    if (firstName && lastName) {
      const now = new Date()
      now.setMinutes(now.getMinutes() + 10)
      const pickupTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      alert(`Order Confirmed! Thank you for your order, ${firstName} ${lastName}. Your pickup time is set for ${pickupTime}.`)
      clearCart()
    } else {
      alert('Please enter your first and last name.')
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold">Checkout</CardTitle>
        <CardDescription className="text-lg">Review your order before placing it.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4 mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <span className="font-semibold text-lg">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          {pupCups > 0 && (
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-lg">Pup Cups (Free)</h3>
                <p className="text-sm text-muted-foreground">
                  $0.00 x {pupCups}
                </p>
              </div>
              <span className="font-semibold text-lg">$0.00</span>
            </div>
          )}
        </ScrollArea>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </CardContent>
      <div className="my-4 border-t border-gray-200" />
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        <Button className="w-full text-lg py-6" size="lg" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </CardFooter>
    </Card>
  )
}
