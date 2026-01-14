import React, { useEffect, useState } from 'react'
import axios, * as others from 'axios';


const Cart = () => {
  const[icart,setCart]=useState([]);
   const url = process.env.REACT_APP_API_URL;
  
  useEffect(()=>{
    cartitems();
  },[]);

  function cartitems(){
  //   const axios = require('axios');
  //   axios.get(`${url}/carts`)
  //  .then(response =>{ console.log(response.data);
  //    setCart(response.data);});

  fetch('https://fakestoreapi.com/carts')
  .then(response => response.json())
  .then(data =>{ console.log(data);
   setCart(data);});
  }
  console.log(icart,"hhhhhh");
  return (
    <div>
      <div className='kk' key={icart.id}>
        <h3>Title:{icart?.userId}</h3>
      </div>
    </div>
  )
}

export default Cart