import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "../App.css";
import "./Adminpage.css";

const Adminpage = () => {
     const url=process.env.REACT_APP_ADMIN_URL;
     console.log(url,"url");
   const [users, setUsers] = useState([]);
    const navigate=useNavigate();

     const Adduser = () => {
    navigate("/addinguser");
  };

  const Edituser=()=>{

  }

//   const Deleteuser=(itemsid)=>{
// axios.delete("url", { params: { id:itemsid } }).then(response => {
//       console.log(response);
//     });

//   }


console.log(users,"users");
 useEffect(()=>{
       employee() 
    },[])
 const employee = () => {
    console.log("userpage");
    axios.get(`${url}`).then((response) => {
      console.log(response.data, "displayuserss");
      setUsers(response.data);
    })
  }
 
  
  return (
    <div className='not text-white'>
       <button className='Add-user' onClick={Adduser}>Add user</button>
   
      {users.map((items) => (
       
            <div className="bg-blue-600 p-4 border-double" key={items?.id}>
         
               <h3 className="font-bold" >Name:{items?.name.name}</h3>
                <h3 className="font-bold" >Age:{items?.age}</h3>
                 <h3 className="font-bold" >email id:{items?.email}</h3>
                  <h3 className="font-bold" >Phone number:{items?.pnumber}</h3>
                  <button className='Edit' onClick={Edituser}>Edit</button><br />
                   {/* <button className='Delete' onClick={()=>Deleteuser(items.id)}>Delete</button> */}
              
          
           
    
       
        </div>
        
   
 

      ))}
       
    </div>
  )
  }


export default Adminpage