"use client"
import { Product } from '@/types'
import React, { FC, MouseEventHandler } from 'react'
import Image from 'next/image'
import IconButton from './Icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/use-previous-modal'
import useCart from '@/hooks/use-cart'
interface ProductCardProps{
    product:Product
}
const ProductCard:FC<ProductCardProps> = ({product}) => {
    const router=useRouter();
   const previewModal=usePreviewModal();
   const cart=useCart();
    const handleClick=()=>{
        router.push(`/product/${product.id}`)
    }
    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.opOpen(product);
    }
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
         
       cart.addItem(product)
    }
  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"  >
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image alt='product' src={product.images[0]?.url} fill className='aspect-square object-cover rounded-md' />
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
                <div className="flex gap-x-6 justify-center ">
                    <IconButton className='' icon={<Expand size={20} className='text-gray-600'/>} onClick={onPreview} />
                    <IconButton className='' icon={<ShoppingCart size={20} className='text-gray-600'/>} onClick={onAddToCart} />
                </div>
            </div>
        </div>
        {/* description */}
        <div  >
            <p className="font-semibold text-lg">{product.name}</p>
            <p className="text-gray-500 text-sm">{product.category.name}</p>
        </div>
        {/* Price */}
        <div className="flex justify-between items-center">
            <Currency value={product.price} />
        </div>
    </div>
  )
}

export default ProductCard