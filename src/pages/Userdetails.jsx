import React from 'react'
import { useParams } from 'react-router-dom';
import "../App.css";
import "./Userdetails.css";
const Userdetails = () => {
   const { id } = useParams();
    const url = process.env.REACT_APP_API_URL;
  return (
    <div className='userdetailspage'>Userdetails
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
export default Userdetails