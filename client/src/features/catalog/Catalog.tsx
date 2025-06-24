import { Button } from "@mui/material";
import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = {
  products: Product[];
}

export default function Catalog({products}: Props) {
  return (
    <>
      <ProductList products={products}/>
      {/* // need to defer addProduct() until the button is clicked, it's being executed as soon as the component is rendered, so no ()*/}
    </>
  )
}