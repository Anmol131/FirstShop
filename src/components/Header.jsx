import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Header()
  {
    let [category, setCategory]=useState([])
    useEffect(()=>{
          fetch(`https://dummyjson.com/products/categories`).then(a=>a.json()).then(b=>setCategory(b))
    },[])
    return(
      <>
      <header className='bg-purple-500 text-white py-5 text-center text-3xl'>This is Header</header>
      <nav className="bg-red-400 text-white py-3 text-center space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {category.slice(0,9).map(a=><Link to={`/category/${a.slug}`}>{a.name}</Link>)}
        <Link to="/contact">Contact</Link>

      </nav>
      </>
    )
  }
export default Header