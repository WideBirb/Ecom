import { useEffect, useState } from "react";
import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);


	useEffect(() => {
		fetch("https://localhost:5001/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);
  
  return (
    <>
      <ProductList products={products}/>
      {/* // need to defer addProduct() until the button is clicked, it's being executed as soon as the component is rendered, so no ()*/}
    </>
  )
}