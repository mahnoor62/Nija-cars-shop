'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Home, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    if (sessionId) {
      // You could fetch order details from your backend here
      // For now, we'll just show a success message
    }
  }, [sessionId])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">Car Rented! 🎉</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Congratulations! Your car rental has been confirmed! You can now pick up your vehicle at the specified location.
          </p>
          
          {sessionId && (
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-mono text-muted-foreground">
                Order ID: {sessionId}
              </p>
            </div>
          )}
          
          <p className="text-sm text-muted-foreground">
            Check your email for rental details and pickup instructions!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Rent More Cars
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="flex-1">
              <Link href="/orders">
                <ShoppingBag className="mr-2 h-4 w-4" />
                View Rentals
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
