import React, { useEffect, useState,useContext } from 'react'
import axios, * as others from 'axios';


import { Addingtocart } from '../App';


const Cart = () => {
  // const {id}=useParams();

  const cartitemsDisplay=useContext(Addingtocart);
  console.log(cartitemsDisplay,"cartitemsdisplay");
   const url = process.env.REACT_APP_API_URL;
   
  

//  navigate("/");
//   const[icart,setCart]=useState([]);
//   const url = process.env.REACT_APP_API_URL;
//   useEffect(()=>{
//     cartitems();
//   },[]);


//   console.log(icart,"hhhhhh");
  return (
    <div className='cart-items'>
      {cartitemsDisplay.map((citems)=>
      <div key={citems.id}>

        <h3>{citems?.title}</h3>
       <h5 className="price">Price:₹{citems?.price}</h5>
      </div>)}
      
    </div>
  )
}

export default Cart
