import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data=useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 flex justify-center align-middle'>
        <div className="text-center flex gap-24 justify-center align-middle">
        <h1 className='text-4xl'>github followers:{data.followers}</h1>
        <img src={data.avatar_url} alt="" className='h-40 ' />
        </div> 
    </div>
  )
}

export default Github


export const getdata=async ()=>{
  const res=await fetch("https://api.github.com/users/shashwatraajsingh")
  return res.json()
}