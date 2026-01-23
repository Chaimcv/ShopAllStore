import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ViewUserDetails.css";
import User from './User';

const ViewUserDetails = () => {
      const { id } = useParams();
      const url=process.env.REACT_APP_ADMIN_URL;
      const[userdetails,setUserdetails]=useState([ ]);

      const[formforEditVisibilty,setFormForEditVisibility]=useState(false);

      const Edit=()=>{
        setFormForEditVisibility(true);

      }
   
console.log(userdetails,"userdetails-console");
 useEffect(()=>{
        viewusers();
     },[id])
  const viewusers = () => {
    //  console.log("userdetailspage");
     axios.get(`${url}${id}`).then((response) => {
       console.log(response.data, "user-displayed");
       setUserdetails(response.data);
     })
   }

  return (
    <div className='viewuserdiv'>
        {formforEditVisibilty&&(
            <User 
            OnEditSuccess={()=>viewusers}/>
        )}
    <div key={userdetails?.id}>
          <img src={userdetails?.userimage} className='w-[20%] h-[20%]' alt='userimage' />
          <h2 className="font-semibold" >Name:{userdetails?.name}</h2>
          <h3 >Age:{userdetails?.age}</h3>
         <h2>Phone Number:{userdetails?.pnumber}</h2>
          <h3 >Email:{userdetails?.email}</h3>
          <p>Address:{userdetails?.address}</p>
          <button className='Edit' onClick={Edit}>Edit</button>
          {/* <button className='Delete' onClick={()=>Deleteuser(userdetails.id)}>Delete</button> */}
    </div>
  </div>  
  )
}

export default ViewUserDetails