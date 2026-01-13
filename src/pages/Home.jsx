import React, { useEffect } from 'react'
import Card from '../components/Card';

const Home = () => {
  
  const product=fetch('https://dummyjson.com/products')
              .then(res => res.json())
              .then(product=>{
                console.log(product);
        const kk=product.products;
         console.log(kk,"kkk");
               
  return (
    <div className="bg-red-600 h-screen"> 
    
      {kk.map((items)=>(
        <p>{items}</p>
        // <Card item={items} /> 
       ))}
    </div>
  )
})
}

export default Home