import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';

const Details = () => {
     const { id } =useParams();
     const url=process.env.REACT_APP_API_URL;

     const[detail,setDetail]=useState([]);
    useEffect(()=>{
        productDetails()},[id]
    )
     const productDetails=()=>{fetch(`${url}/products/${id}`)
  .then(response => response.json())
  .then(data =>{ console.log(data);
           setDetail(data)});
     }
    // console.log(detail);
  return (
    <div className='card flex grid grid-cols-2 '>
         <div className='image bg-[#F0EEED] m-[10%]'>
             <img className='product-image w-[50%] h-[50%] ]'src={detail?.image}></img>
            </div>   
                <div className='bg-blue-500 m-[10%]'key={detail.id}>
                    <h2 className='title font-extrabold'>{detail?.title}</h2>
                     {/* <h4 className='rating'>{detail?.rating.rate}</h4> */}
                    <h3 className='category'>{detail?.category}</h3>
                    <p className='description'>{detail?.description}</p>
                   
                   
                    <h5 className='price'>₹{detail?.price}</h5>
                    <button className='cart-btn bg-black text-white'>Add to Cart</button>
                </div>

            
           
        
    </div>
  )
}

export default Details