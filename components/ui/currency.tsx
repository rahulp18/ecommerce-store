"use client"
import React, { FC, useEffect, useState } from 'react'
interface CurrencyProps{
  value:string | Number
}

export const formatter=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'INR'
  })
const Currency:FC<CurrencyProps> = ({value}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
   setIsMounted(true)
    },[]);

    if(!isMounted) return null;
  return (
    <div className='font-semibold' >
 {formatter.format(Number(value))}
    </div>
  )
}

export default Currency