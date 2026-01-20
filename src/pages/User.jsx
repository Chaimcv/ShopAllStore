import axios from 'axios';
import React, { useEffect, useState } from 'react'

const User = () => {
  const url=process.env.REACT_APP_ADMIN_URL;
     console.log(url,"url");

     const[name,setName]=useState();
      const[age,setAge]=useState();
       const[email,setEmail]=useState();
        const[pnumber,setPhonenumber]=useState();

        const Datasadded = {
  name: {name},
  age:{age},
  email: {email},
  pHonenumber:{pnumber}
};

const config = {
  headers: {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar'
  }
};




      useEffect(() => {
      Addnewuser();
    }, []);

  const Addnewuser=()=>{
    console.log("userpage");
    axios.post(`${url}`,Datasadded,config).then((response) => {
      console.log(response.data, "addeduser");
   
     
  
    });
  };


  
  return (
    <div>
     <label for="Name">Name<input type='text'  value={name} onChange={(e) => setName(e.target.value)} /></label><br />
      <label for="Age">Age<input type='number' value={age} onChange={(e) => setAge(e.target.value)}/></label> <br />
        <label for="Email">Email<input type='email' value={email}  onChange={(e) => setEmail(e.target.value)}/></label><br />
         <label for="Phone number">Phone number<input type='phonenumber' value={pnumber} onChange={(e) => setPhonenumber(e.target.value)}/></label><br />
        
         <button onClick={Addnewuser}>Submit</button>
    </div>
  )
}

export default User