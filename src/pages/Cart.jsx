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
       <img
          className=" bg-gray-400"
          src={citems?.image}
        ></img>
        <h3>{citems?.title}</h3>
       <h5 className="price">Price:₹{citems?.price}</h5>
       <button>Buy Now</button>
      </div>)}
      
    </div>
  )
}

export default Cart
