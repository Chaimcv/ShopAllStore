import React, { useEffect, useState } from 'react'
import Details from '../pages/Details';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Test = () => {
 const url=process.env.REACT_APP_API_URL;
  console.log(url,"url");
 
  
//  const navigate=useNavigate();
//    const accessToken=false;
//   if(!accessToken){
//         navigate("/Login");
//   }

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
console.log(data,"data");
  
  return (
    <div className="bg-white flex grid grid-cols-4 mx-[3%] my-[3%]"> 
      {data?.map((items)=>(
        <div className='card w-[95%] h-[95%] mx-auto bg-[#F2F0F1] mt-[1%]' key={items.id}>
        <p className='title text-left font-semibold text-base m-[2%]'>{items?.title}</p><br/>
       <img className="image w-[60%] h-[60%] mx-auto "src={items?.image}></img>
       <p>₹{items?.price}</p>
       <Link to={`/details/${items.id}`}>View Details</Link>
         {/* <Link to="/details">View Details</Link> */}
 
        </div>
       ))}
    </div>
  )
 
}


export default Test