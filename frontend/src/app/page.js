'use client'

import ProductCatalog from "./container/ProductCatalog"
import NavBar from "./components/NavBar"
import 'tailwindcss/tailwind.css'


export default function Home() {

  return (
   <>
    <div className="flex flex-col w-full">
      <NavBar/>
      <ProductCatalog/>
    </div>
   </>
  )
}
