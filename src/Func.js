import React, { useState } from 'react'

const Func = () => {

    const [data,setData] = useState("");
    const handleClick=()=>{
         setData("this is Function Component Method")
    }
  return (
    <div>
        <h1>We Are in te Function based Component</h1>
        <button onClick={handleClick}>Check Here</button>
        <h2>{data}</h2>
    </div>
  )
}

export default Func 