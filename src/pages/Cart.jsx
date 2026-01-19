import React, { useEffect, useState,useContext } from 'react'
import axios, * as others from 'axios';


import { Addingtocart } from '../App';


const Cart = () => {
  // const {id}=useParams();

  const cartitemsDisplay=useContext(Addingtocart)
  console.log(cartitemsDisplay,"cartitemsdisplay");
   const url = process.env.REACT_APP_API_URL;
<<<<<<< HEAD
   
  
 
=======
   const navigate=useNavigate();
   console.log(Cartdisplay,"cartdispaly")
>>>>>>> ca927d7bef7e42c180283b52073f559ca738f109

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
