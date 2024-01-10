"use client"
import React, { useEffect, useState } from 'react'
import Button from './ui/button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'
 

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false)  
  const cart=useCart();
  const router=useRouter();
  useEffect(()=>{
   setIsMounted(true)
  },[]);

  if(!isMounted){
    return null;
  }
  return (
    <div className='ml-auto flex items-center gap-x-4' >
       <Button className='flex items-center px-4 py-2' onClick={()=>router.push('/cart')}  >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-semibold text-white' >{cart.items.length}</span>
       </Button>
    </div>
  )
}

export default NavbarAction