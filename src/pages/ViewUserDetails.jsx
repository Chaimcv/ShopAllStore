import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./ViewUserDetails.css";
import User from '../components/AddUserForm';
import UserForm from '../components/AddUserForm';
import EditForm from '../components/EditForm';

const ViewUserDetails = () => {
      const { id } = useParams();
      const baseUrl=process.env.REACT_APP_ADMIN_URL;
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
    const url=`${baseUrl}/users/${id}`;
     axios.get(url).then((response) => {
       console.log(response.data, "user-displayed");
       setUserdetails(response.data);
     })
   }

  return (
    <div >
        {formforEditVisibilty&&(
            <EditForm 
            OnEditSuccess={userdetails}
            EditId={id}/>
        )}
    <div key={userdetails?.id}>
      <div className='HeroSection'>
         <h2 className="font-semibold" >NAME: {userdetails?.name}</h2>
         <button className='Edit bg-black text-white' onClick={Edit}>Edit</button>
      </div>
        <div>
      
         <div className='viewuserdiv'>
           <div> <img src={userdetails?.userimage} className='w-[20%] h-[20%]' alt='userimage' /></div>
          <h3 >Age:{userdetails?.age}</h3>
         <h2>Phone Number:{userdetails?.pnumber}</h2>
          <h3 >Email:{userdetails?.email}</h3>
          <p>Address:{userdetails?.address}</p>
          </div>
          </div>
          {/* <button className='Delete' onClick={()=>Deleteuser(userdetails.id)}>Delete</button> */}
    </div>
  </div>  
  )
}

export default ViewUserDetails