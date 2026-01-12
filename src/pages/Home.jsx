import React, { useEffect } from 'react'
import Card from '../components/Card';

const Home = () => {
  
  const[data,setData]=useState([]) ;
     useEffect(()=>{
        product() 
     },[])
    const product=()=>{fetch(`${url}/products`)
             .then(res=>res.json())
               .then(prod=>{
                 console.log(prod);
                 setData(prod);
                 
               })
             }
  return (
    <div className="bg-red-600 h-screen"> 
     
     
    </div>
  )
})
}

export default Home