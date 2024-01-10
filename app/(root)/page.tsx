import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

 export const revalidate=0;

export default async function  Home() {
const billboard=await getBillboard("0dc637e2-18c7-4f1b-9658-0cdc7fdb9f31")
const products=await getProducts({isFeature:true})
  return (
   <Container  >
    <div className="space-y-10 pb-10">
      <Billboard data={billboard} />
    <div className="flex flex-col gap-y-8 px-4 ms:px-6 lg:px-8">
      <ProductList title='Featured Products' products={products} />
    </div>
    </div>
   </Container>
  )
}
