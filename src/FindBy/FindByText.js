import React, { useEffect, useState } from 'react'

const FindByText = () => {
    const [data,setData] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setData(true);
        },1000)
    },[])
  return (
    <>
    {
        data ? <h1>Data Found</h1> : <h1>Data not found</h1>
        }
    </>
  )
}

export default FindByText