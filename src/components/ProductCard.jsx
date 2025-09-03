import Image from 'next/image'
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'
import toast from 'react-hot-toast';
import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function ProductCard({ product, onBuyNow }) {
  const [currency, setCurrency] = useState({});

  //rest api
  const fetchOtherCurrencies = async () => {
    try {
      const response = await axios.get(`https://open.er-api.com/v6/latest/EUR`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setCurrency(response.data.rates);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };
  console.log('currency=', currency);
  useEffect(() => {
    fetchOtherCurrencies();
  }, []);


  const handleCheckout = async () => {
    try {

      const CarPriceInDollars = Number((product?.price * currency['USD']).toFixed(2));
      console.log("product?.price", product?.price)
      console.log(" currency['USD']",  currency['USD'])
      // const amount_cents = Math.round(CarPriceInDollars * 100);
      console.log('CardPriceInAud', CarPriceInDollars);

      // const absImage =
      //     product.image?.startsWith('http')
      //         ? product.image
      //         : `${window.location.origin}${product.image.startsWith('/') ? product.image : '/' + product.image}`;

      const productPayload = {
        title: product.title,
        price: CarPriceInDollars,
        image: product.image,
      };
      console.log("productPayload", productPayload);
      const res = await fetch(`${BASE_URL}/api/payment/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product: productPayload })
      });

      const response = await res.json();
      console.log('response in checkout', response);
      if (response.url) {
        window.location.href = response.url;
      }
    } catch (error) {
      console.error('Checkout error', error);
      alert('Error initiating checkout');
    }
  };
  const onClickBuy = () => {
    onBuyNow?.(product);
    handleCheckout();
  };


  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-transparent border-slate-600">
      <CardContent className="p-0">
        {/* Car Image with Price Banner */}
        <div className="relative aspect-[16/15] overflow-hidden">
          <Image
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
                ${(product.price)}
              </span>
            </div>
          </div>
        </div>

        {/* Buy Button */}
        <div className="p-4">
          <Button
            onClick={onClickBuy}
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
