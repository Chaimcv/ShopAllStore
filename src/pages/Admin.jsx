import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
const navigate=useNavigate();

   const Adduser=()=>{
        navigate("/addinguser");
      
    }
  return (
    <div>
        <button onClick={Adduser}>Create user</button>
    </div>
  )
}

export default Admin