import { useEffect, useState } from "react"
import type { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const addProduct = () => {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        quantityInStock: 100,
        description: 'test',
        pictureUrl: 'https://picsum.photo/200',
        type: 'test',
        brand: 'test'
      }])
  }


  return (
    <div>
      <h1>Re-store</h1>
      <ul>
        {products.map((item, index )=> (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      {/* // need to defer addProduct() until the button is clicked, it's being executed as soon as the component is rendered, so no ()*/}
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
