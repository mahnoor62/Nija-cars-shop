import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function ProductCard({ product, onBuyNow }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-transparent border-slate-600">
      <CardContent className="p-0">
        {/* Car Image with Price Banner */}
        <div className="relative aspect-[16/15] overflow-hidden">
          <Image
            // src={`${baseUrl}/${product.image}`}
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Price Banner - Top Right Corner */}
          <div className="absolute top-2 right-2">
            <div className="bg-white transform skew-x-12 px-3 py-1">
              <span className="text-purple-600 font-bold text-sm transform -skew-x-12">
                ${(product.price / 100).toFixed(0)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Buy Button */}
        <div className="p-4">
          <Button 
            onClick={() => onBuyNow(product)}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold"
            size="lg"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            BUY NOW
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
