import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ViewUserDetails = () => {
      const { id } = useParams();
      const url=process.env.REACT_APP_ADMIN_URL;
      const[userdetails,setUserdetails]=useState();
   
console.log(userdetails,"userdetails-console");
 useEffect(()=>{
        viewusers() 
     },[])
  const viewusers = () => {
    //  console.log("userdetailspage");
     axios.get(`${url}`).then((response) => {
       console.log(response.data, "user-displayed");
       setUserdetails(response.data);
     })
   }

  return (
    <div className='h-screen w-screen bg-slate-500'>ViewUserDetails
    <div key={userdetails?.id}>
        <h2>Name:{userdetails?.pHonenumber.pnumber}</h2>
          {/* <h3 className="font-semibold" >Age:{userdetails.age.age}</h3> */}
    </div>
  </div>  
  )
}

export default ViewUserDetails