import React, { useEffect, useState } from 'react'
import axios, * as others from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Cart = (Cartdisplay) => {
  // const {id}=useParams();
   const url = process.env.REACT_APP_API_URL;
   const navigate=useNavigate();
   console.log(Cartdisplay,"cartdispaly")

//  navigate("/");
//   const[icart,setCart]=useState([]);
//   const url = process.env.REACT_APP_API_URL;
//   useEffect(()=>{
//     cartitems();
//   },[]);


//   console.log(icart,"hhhhhh");
  return (
    <div>
      {/* <div className='kk' key={icart.id}>
        <h3>Title:{icart?.userId}</h3>
      </div> */}
    </div>
  )
}

export default Cart
