import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Home = () => {
  const[searchg,setSearch]=useState();
  function search(){
// not used
  }
  const product=fetch('https://dummyjson.com/products')
              .then(res => res.json())
              .then(product=>{
                console.log(product);
        const kk=product.products;
         console.log(kk,"kkk");
               
  return (
    <div className="bg-red-600 h-screen"> 
    
      {kk.map((items)=>(
        <div className='main' key={items.id}>
        <p>{items?.tilte}</p>
        <p>{items?.decription}</p>
        <button onClick={search}>search</button>
       
        </div>
       ))}
    </div>
  )
})
}

export default Home
