import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../App.css";
import "./Adminpage.css";
import User from './User';
import ViewUserDetails from './ViewUserDetails';

const Adminpage = () => {  
  const navigate=useNavigate();                    
     const url=process.env.REACT_APP_ADMIN_URL;
    //  console.log(url,"url");
   const [users, setUsers] = useState([]);    //to display users in adminpage

   const[formvisible,setFormvisible]=useState(false);         //to set the visibility of form--numbering steps 1
        console.log(formvisible,"formvisibility false");

     const Adduser = () => {                //3- state variable value changed to true,hence form(User) is displayed. goto userpage
      setFormvisible(true);
      console.log(formvisible,"formvisibility true");
    };

  const Deleteuser=(deleteid)=>{
    console.log(deleteid,"deleteid");
axios.delete(`${url}/${deleteid}`).then(response => {
      console.log(response,"responsecheck");
    });
 alert("Deleted");
employee();
  }


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
   setFormvisible(false) 
  }
//  console.log(userCreated,"passedfrom user");
  
const testing=()=>{
  navigate("/view");
}
  return (
    <div className='not text-black'>
     {formvisible&&(
          <User 
          OnSubmitSuccess={()=>employee}
           OnCancelBtnClick={()=>setFormvisible(false)}/>                       //4-employee function passed to Form(Userpage)
        )}
        
              {/* 2- on btn click */}
       <button className='Add-user' onClick={Adduser}>Add user</button>   
       
      {users.map((items) => (
            <div className="user-display" key={items?.id}>
               <h3 className="font-semibold" >Name:{items?.name.name}</h3>
                <h3 className="font-semibold" >Age:{items?.age.age}</h3>
                 <h3 className="font-semibold" >email id:{items?.email.email}</h3>
                  <h3 className="font-semibold" >Phone number:{items?.pHonenumber.pnumber}</h3>
                   {/* <Link to={`userdetails/${items.id}`}><button className='View'>View</button></Link><br /> */}
                     {/* <Link to={`/viewUserDetails/${items.id}`}><button className='View'>View</button></Link><br /> */}
                   <button className='Delete' onClick={()=>Deleteuser(items.id)}>Delete</button>
                   <button onClick={testing}>testing</button>
          </div>
      ))}
    </div>
  )
  }


export default Adminpage