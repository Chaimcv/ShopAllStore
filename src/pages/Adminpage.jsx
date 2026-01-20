import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "../App.css";

const Adminpage = () => {
    const url=process.env.REACT_APP_ADMIN_URL;
    const [user, setUser] = useState([]);
    const navigate=useNavigate();
     const Adduser = () => {
    navigate("/addinguser");
  };

  useEffect(() => {
      Displayusers();
    }, []);

    const Displayusers = () => {
    console.log("userpage");
    axios.get(`${url}`).then((response) => {
      console.log(response.data, "displayuserss");
      setUser(response.data);
    });
  };

  return (
    <div className='bg-violet-800'>
       <h1 className='bg-pink-800 font-bold text-red-700'> haiiii</h1>
       <button>Add user</button>
        {user?.map((uitems)=>{
            <div key={uitems.id}>
                <h3>Username:{uitems?.username}</h3> 
            </div>
      })}
  </div> 
  )
}

export default Adminpage