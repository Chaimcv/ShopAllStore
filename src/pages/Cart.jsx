import React, { useEffect, useState } from 'react'
import axios, * as others from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Cart = () => {
  const {id}=useParams();
   const url = process.env.REACT_APP_API_URL;
   const navigate=useNavigate();
   const idArray=[];
  //  idArray.push(id);

  // const UpdatedArray=[...idArray,id];
  //  console.log( UpdatedArray);

const UpdatedArray=idArray.concat(id);
 console.log( UpdatedArray);
 navigate("/");

//   const[icart,setCart]=useState([]);
//    const url = process.env.REACT_APP_API_URL;
  
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