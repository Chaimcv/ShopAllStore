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
    <div className="bg-red-600 flex grid grid-cols-4 mx-[3%] my-[3%]"> 
      {data?.map((items)=>(
        <div className='card w-[95%] h-[95%] mx-auto bg-green-500 mt-[1%]'>
        <p className='title text-left font-semibold text-base mb-[1%]'>{items?.title}</p><br/>
       <img className="image w-[70%] h-[70%] mx-auto "src={items?.image}></img>
       <p>₹{items?.price}</p>
 
        </div>
       ))}
    </div>
  )
}


export default Test