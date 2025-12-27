import React, { useEffect, useState } from 'react'
import FrontendLayout from '../../layout/FrontendLayout'
import { useParams } from 'react-router-dom'


function Detail() {
    let {id}=useParams()
      let [data, setData]=useState([])
      useEffect(()=>{
            fetch(`https://dummyjson.com/products/${id}`).then(a=>a.json()).then(b=>setData(b))
      },[])

  return (
    <FrontendLayout>
      <section>
        <div className='contianer mx-auto'>
          <h2>{data.title}</h2>
          <img src={data.thumbnail} alt="" />
        </div>
      </section>
    </FrontendLayout>
  )
}

export default Detail
