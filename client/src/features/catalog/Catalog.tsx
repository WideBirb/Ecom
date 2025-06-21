import { Button } from "@mui/material";
import type { Product } from "../../app/models/product";

type Props = {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
  return (
    <>
      <ul>
        {products.map((item )=> (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
      {/* // need to defer addProduct() until the button is clicked, it's being executed as soon as the component is rendered, so no ()*/}
      <Button variant="contained" onClick={addProduct}>Add Product</Button> 
    </>
  )
}