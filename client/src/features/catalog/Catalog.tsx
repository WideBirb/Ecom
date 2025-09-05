import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";

export default function Catalog() {
  const {data, isLoading} = useFetchProductsQuery();
   if (isLoading || !data) return <div>Loading...</div>

  return (
    <>
      <ProductList products={data}/>
      {/* // need to defer addProduct() until the button is clicked, it's being executed as soon as the component is rendered, so no ()*/}
    </>
  )
}