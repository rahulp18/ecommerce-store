"use client"
import { Product } from '@/types'
import React, { FC } from 'react'
import Currency from './ui/currency'
import Button from './ui/button'
import { ShoppingCart } from 'lucide-react'
import useCart from '@/hooks/use-cart'
interface InfoProps{
    product:Product
}
const Info:FC<InfoProps> = ({product}) => {
    const cart=useCart();

    const onAddToCart=()=>{
        cart.addItem(product);
    }
  return (
    <div>
        <h1 className="md:text-3xl text-2xl font-bold text-gray-900">{product.name}</h1>
        <div className="mt-3 flex items-end justify-between">
            <p className="md:text-2xl text-xl text-gray-900">
                <Currency value={product?.price} />
            </p>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-y-4 md:gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div className="">
                    {product?.size?.value}
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Color:</h3>
                <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: product?.color?.value }} />
            </div>
        </div>
        <h1 className="md:text-lg text-base font my-3 font-normal text-gray-700">{product?.description}</h1>
        <div className="mt-10 flex items-center gap-x-3">
            <Button onClick={onAddToCart} className='flex items-center gap-x-2' >
                Add to Cart
                <ShoppingCart size={20} />
            </Button>
        </div>
    </div>
  )
}

export default Info