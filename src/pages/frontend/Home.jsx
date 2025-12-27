import React, { useEffect, useState } from 'react'
import FrontendLayout from '../../layout/FrontendLayout'
import { Link } from 'react-router-dom'
import ProductByCategory from '../../components/ProductByCategory'

function Home() {
      let [data, setData]=useState([])
      useEffect(()=>{
            fetch(`https://dummyjson.com/products`).then(a=>a.json()).then(b=>setData(b.products))
      },[])
  return (
    <>
      <FrontendLayout>
        <section>
          <div className="container mx-auto">
            <h2>All Products</h2>
            <div className="grid grid-cols-4 gap-5">
              {data.map((a)=>(
                <div className='shadow p-2 border'>
                  <Link to={`/detail/${a.id}`}>
                  <img src={a.thumbnail} alt="" />
                  <p>{a.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProductByCategory slug='beauty'/>
        <ProductByCategory slug='furniture'/>
      </FrontendLayout>
    </>
  )
}

export default Home
