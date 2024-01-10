import qs from 'query-string'


import { Product } from '@/types'


const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query{
    categoryId?:string;
    colorId?:string;
    sizeId?:string;
    isFeature?:boolean;
}

const getProducts=async(query:Query):Promise<Product[]>=>{
    const url=qs.stringifyUrl({
        url:URL,
        query:{
            colorId:query.colorId,
            sizeId:query.sizeId,
            categoryId:query.categoryId,
            isFeature:query.isFeature
        }
    });

    const res=await fetch(url)

    return res.json();
}

export default getProducts