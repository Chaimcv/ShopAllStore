import React, { useEffect, useState } from 'react'

const Test = () => {
    const[data,setData]=useState([]) ;
    useEffect(()=>{
       product() 
    },[])
//    const product=()=>{fetch('https://dummyjson.com/products')
//               .then(res => res.json())
//               .then(prod=>{
//                 console.log(prod);
//                 setData(prod);
                
//               })
//             }
console.log(data,"data");
        


         
  return (
    <div className="bg-red-600 h-screen"> 
     <p>ghhjj</p>
      {data.map((items)=>(
        <p>{items.products}</p>
        // <Card item={items} /> 
       ))}
    </div>
  )
}


export default Test