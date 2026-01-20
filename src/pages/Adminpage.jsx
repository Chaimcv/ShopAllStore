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

//   useEffect(() => {
//       Displayusers();
//     }, []);

//     const Displayusers = () => {
//     console.log("userpage");
//     axios.get(`${url}`).then((response) => {
//       console.log(response.data, "displayuserss");
//       setUser(response.data);
//     });
//   };

//   return (
//     <div className='bg-violet-800'>
//        <h1 className='bg-pink-800 font-bold text-red-700'> haiiii</h1>
//        <button>Add user</button>
//         {user?.map((uitems)=>{
//             <div key={uitems.id}>
//                 <h3>Username:{uitems?.username}</h3> 
//             </div>
//       })}
//   </div> 
//   )
// }

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
       
            <div className="bg-blue-600 p-4 border-double" key={items.id}>
         
               <h3 className="font-bold" >Username:{items?.username}</h3>
                <h3 className="font-bold" >email id:{items?.email}</h3>
                  <button className='Edit'>Edit</button><br />
                   <button className='Delete'>Delete</button>
              
          
           
    
       
        </div>
        
   
 

      ))}
       
    </div>
  )
  }


export default Adminpage