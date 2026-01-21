import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "../App.css";
import "./Adminpage.css";

const Adminpage = () => {
     const url=process.env.REACT_APP_ADMIN_URL;
     console.log(url,"url");

   const [users, setUsers] = useState([]);

   const[posts,setPosts]=useState([]);  //delete

    const navigate=useNavigate();
     const Adduser = () => {
    navigate("/addinguser");
  };

  const Edituser=(editid)=>{

  }

  const Deleteuser=(deleteid)=>{
axios.delete(`${url}/${deleteid}`).then(response => {
      console.log(response);

    });
 alert("Deleted");
 setUsers()
  }


// const Deleteuser = (index) => {
//   const updatedPosts = posts.filter((_, i) => i !== index);
//   setPosts(updatedPosts);
// };

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
       
            <div className="user-display" key={items?.id}>
         
               <h3 className="font-bold" >Name:{items?.name.name}</h3>
                <h3 className="font-bold" >Age:{items?.age.age}</h3>
                 <h3 className="font-bold" >email id:{items?.email.email}</h3>
                  <h3 className="font-bold" >Phone number:{items?.pHonenumber.pnumber}</h3>
                  <button className='Edit' onClick={()=>Edituser(items.id)}>Edit</button><br />
                   <button className='Delete' onClick={()=>Deleteuser(items.id)}>Delete</button>
              
          
           
    
       
        </div>
        
   
 

      ))}
       
    </div>
  )
  }


export default Adminpage