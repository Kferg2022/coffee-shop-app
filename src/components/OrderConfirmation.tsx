import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

export function OrderConfirmation() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Thank You for Your Order!</CardTitle>
        <CardDescription>Your order has been confirmed and will be prepared shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          Order details and estimated pickup time will be sent to your email.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Back to Menu
        </Button>
      </CardFooter>
    </Card>
  )
} 
