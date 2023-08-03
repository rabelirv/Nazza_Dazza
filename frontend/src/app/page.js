'use client'

import {useEffect} from 'react';
import NavBar from "./components/NavBar"
import 'tailwindcss/tailwind.css'


export default function Home() {

  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res=> console.log(res))
  })
  return (
   <>
    <div className="flex border-2 border-orange-400">
      <NavBar/>
      <h2>Nazza Dazza</h2>
    </div>
   </>
  )
}
