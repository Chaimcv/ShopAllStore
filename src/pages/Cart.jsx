import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Cart = () => {
  const[icart,setCart]=useState([]);
   const url = process.env.REACT_APP_API_URL;
  
  useEffect(()=>{
    cartitems()
  })

  function cartitems(){
    const axios = require('axios');
    axios.get(`${url}/carts`)
   .then(response =>{ console.log(response.data);
     setCart(response);});
  }
  return (
    <div>Cart</div>
  )
}

export default Cart