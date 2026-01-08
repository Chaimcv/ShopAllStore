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
    
  return (
    <div>
        
            {detail.map((item)=>(
                <div className='bg-black'key={item.id}>
                    <h2 className='title'>{item?.title}</h2>
                    <h3 className='category'>{item?.category}</h3>
                    <p className='description'>{item?.description}</p>
                    <img className='product-image'>src={item?.image}</img>
                    <h4 className='rating'>{item?.rating}</h4>
                    <h5 className='price'>₹{item?.price}</h5>
                    <button>Buy Now</button>
                </div>

            ))};
           
        
    </div>
  )
}

export default Details