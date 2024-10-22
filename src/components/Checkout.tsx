import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function Checkout() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle checkout logic here
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
        <CardDescription>Complete your order details.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter your address" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">Complete Order</Button>
      </CardFooter>
    </Card>
  )
}
