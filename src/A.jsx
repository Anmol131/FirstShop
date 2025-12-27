import React, { useState } from 'react'

function A() {
  let [count, setCount] =useState(0)
  let[active, setActive]=useState(true)
  let[data]=useState({uname: 'admin', pass:'password'})
  return (
    <div>
      <h2 className={active ? '':'hidden'}>useState Hook{count}</h2>
      <button onClick={()=>setCount(count+1)}>++</button>
      <button onClick={()=>setCount(count-1)}>--</button>
      <button onClick={()=>setActive(!active)}>toogle</button>
      <p>{data.uname} {data.pass}</p>
    </div>
  )
}

export default A
