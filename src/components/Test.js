import React, { useEffect, useState } from 'react'

const Test = () => {
    const[data,setData]=useState([]) ;
    useEffect(()=>{
       product() 
    },[])
   const product=()=>{fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
              .then(prod=>{
                console.log(prod);
                setData(prod);
                
              })
            }
console.log(data,"data");
  
  return (
    <div className="bg-red-600 h-screen flex grid grid-cols-4 mx-1"> 
      {data?.map((items)=>(
        <div className='card w-[70%] h-[70%] bg-green-500'>
        <p className='title text-left font-semibold text-base'>{items?.title}</p>
       <img className="image w-[70%] h-[70%] align-middle"src={items?.image}></img>
       <p>₹{items?.price}</p>
 
        </div>
       ))}
    </div>
  )
}


export default Test