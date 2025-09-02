import { useState, useEffect } from 'react'
import { X, Settings, Shield, Plus, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from './ProductCard'
import { products } from '@/data/products'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      once: true,
      offset: 100
    })
  }, [])

  const handleBuyNow = async (product) => {
    // Handle car purchase logic here
    console.log('Buying car:', product)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Screen Car Background Image as Cover - No Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      {/* Dark overlay for better text readability - No Animation */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Top Bar */}
      {/* <div className="relative z-30 pt-6 px-6">
     
         

       </div> */}
      
      {/* Choose Cars Section - Direct on Page */}
      <div className="relative z-20 mt-20 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div 
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="relative inline-block"
          >
            <div className="w-full h-16 bg-gradient-to-r from-purple-500 to-pink-500 transform skew-x-12 px-8 py-2">
              <h2 className="text-4xl font-bold text-white transform -skew-x-12">CHOOSE CARS</h2>
            </div>
          </div>
        </div>
        
        {/* Cars Container with Outer Scroll */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="600"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 pb-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={800 + (index * 100)}
                data-aos-offset="50"
              >
                <ProductCard
                  product={product}
                  onBuyNow={handleBuyNow}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
