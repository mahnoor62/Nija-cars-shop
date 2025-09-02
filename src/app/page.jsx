'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here')

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleBuyNow = async (product) => {
    setIsLoading(true)
    
    try {
      // Create checkout session for single product
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.image,
          }],
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { sessionId } = await response.json()
      
      // Redirect to Stripe Checkout
      const stripe = await stripePromise
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to proceed to checkout. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      
      <main>
        <Hero/>
  
      </main>
    </div>
  )
}
