import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ViewUserDetails.css";

const ViewUserDetails = () => {
      const { id } = useParams();
      const url=process.env.REACT_APP_ADMIN_URL;
      const[userdetails,setUserdetails]=useState();
   
console.log(userdetails,"userdetails-console");
 useEffect(()=>{
        viewusers() 
     },[id])
  const viewusers = () => {
    //  console.log("userdetailspage");
     axios.get(`${url}`).then((response) => {
       console.log(response.data, "user-displayed");
       setUserdetails(response.data);
     })
   }

  return (
    <div className='viewuserdiv'>
    <div key={userdetails?.id}>
        <h2>Name:{userdetails?.name}</h2>
          <h2>id:{userdetails?.id}</h2>
          <h3 className="font-semibold" >Age:{userdetails?.age}</h3>
    </div>
  </div>  
  )
}

export default ViewUserDetails