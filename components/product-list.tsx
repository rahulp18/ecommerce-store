 
import { Product } from '@/types';
import React from 'react'
import NoResults from './ui/no-result';
import ProductCard from './ui/product-card';
interface ProductListProps{
    title:string;
    products:Product[]
}
const ProductList:React.FC<ProductListProps> = ({title,products}) => {
  return (
    <div className='space-y-4' >
        <h3 className='font-bold text-3xl' >

            {title}
        </h3>
        {
            products.length==0 && <NoResults/>
        }
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {
        products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))
    }
 </div>
    </div>
  )
}

export default ProductList