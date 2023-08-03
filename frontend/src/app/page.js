import NavBar from "./components/NavBar"
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
   <>
    <div className="flex border-2 border-orange-400">
      <NavBar/>
      <h2>Nazza Dazza</h2>
    </div>
   </>
  )
}
