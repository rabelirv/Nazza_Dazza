'use client'

import {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard"
import 'tailwindcss/tailwind.css'


export default function ProductCatalog() {
    const [products, setProducts] = useState([]);
  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res=> setProducts(res))
  }, [])

    const productCards = products.map((product,i) => <ProductCard key={i} title={product.title} price={product.price} description={product.description} image={product.image}/>)
  return (
    <div className="w-full grid grid-cols-3 gap-8 place-self-auto">
        {productCards}
    </div>
  )
}