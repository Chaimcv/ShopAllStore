import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EditForm = ({OnEditSuccess,EditId}) => {
 console.log(EditId,"passedid");
  console.log(OnEditSuccess,"viewers--success");

 const [edits, setEdits] = useState([]);
  const baseUrl = process.env.REACT_APP_ADMIN_URL;
  console.log(baseUrl, "baseurl");
 

//   const [datta, setResdata] = useState();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPhonenumber] = useState();
   const [userimage, setUserimage] = useState();
    const [address, setAddress] = useState();


     const Datasadded = {
    name,
    age,
    email,
    pnumber,
    userimage,
    address,
  };

   useEffect(() => {
    EditUser();
  }, [EditId]);
  
  const EditUser = () => {
    // console.log("editdata page");
     const url=`${baseUrl}/users/${EditId}`;
     console.log(Datasadded,"datas after editing");
     axios.patch(url, Datasadded).then((response) => {
      console.log(response.data, "userUpdated");
      setEdits(response.data);
       console.log(edits, "edits");
    //    if(response.data){            
    // //  OnSubmitSuccess()
    // //   OnCancelBtnClick()
   
    // }
    });
    // alert("Details Updated");
  };
  
  return (
    <div className="Edit-btn" id="EditUserSection">
      <label for="Name">
        Name: 
        <input
          type="text"
          value={name}
          defaultValue={OnEditSuccess.name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br /><br />
      <label for="Age">
        Age: 
        <input
          type="number"
          value={age}
          defaultValue={OnEditSuccess.age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>{" "}
      <br /><br />
      <label for="Email">
        Email: 
        <input
          type="email"
          value={email}
          defaultValue={OnEditSuccess.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br /><br />
      <label>
        User Image: 
        <input
          type="text"
          value={userimage}
          defaultValue={OnEditSuccess.userimage}
          onChange={(e) => setUserimage(e.target.value)}
        />
      </label>
      <br /><br />
       <label for="Phone number">
        Phone number: 
        <input
          type="phonenumber"
          value={pnumber}
          defaultValue={OnEditSuccess.pnumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </label>
       <br /><br />
       <label>
        Address: 
        <input
          type="text"
          value={address}
          defaultValue={OnEditSuccess.address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
       <br /><br />
       <button onClick={EditUser}>Update</button>
    </div>

)}
    
 


export default EditForm