import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const User = ({OnSubmitSuccess,OnCancelBtnClick,OnEditSuccess,EditId}) => {       //5-employee function accessed
  // const { id } = useParams();
  console.log(EditId,"passedid");
  console.log(OnSubmitSuccess,"onsubmit-success");
console.log("updateddata");
 console.log(OnEditSuccess,"viewers--success");

  const [edits, setEdits] = useState([]);  //Edit section

  const baseUrl = process.env.REACT_APP_ADMIN_URL;
  console.log(baseUrl, "baseurl");
  const navigate = useNavigate();

  const [datta, setResdata] = useState();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPhonenumber] = useState();
   const [userimage, setUserimage] = useState();
    const [address, setAddress] = useState();

  //edit section
  useEffect(() => {
    EditUser();
  }, [EditId]);
  const EditUser = () => {
    console.log("editdata page");
     const url=`${baseUrl}/users/${EditId}`;
   axios.put(url, Datasadded).then((response) => {
      console.log(response.data, "userUpdated");
      setEdits(response.data);
       console.log(edits, "edits");
    //    if(response.data){            
    //  OnSubmitSuccess()
    //   OnCancelBtnClick()
    // }
    });
    // alert("Details Updated");
  };

  // const ItemToBeEdited=display.filter(item=>{
  //     return item.name.includes(result);
  //   });

  //add section
  const Datasadded = {
    name,
    age,
    email,
    pnumber,
    userimage,
    address,
  };

  // const config = {
  //   headers: {
  //     Authorization: "Bearer my-token",
  //     "My-Custom-Header": "foobar",
  //   },
  // };

  useEffect(() => {
    if (datta != null) {
      Addnewuser();
    }
  }, []);

  const Addnewuser = () => {            //7- datas posted 
    console.log("userpage");
     const url=`${baseUrl}/users`;
    axios.post(url, Datasadded).then((response) => {
      console.log(response.data, "addeduser");
      setResdata(response.data);
        if(response.data){            //8-after adding data, send it to employee to map and show in admin page 
     OnSubmitSuccess()
      OnCancelBtnClick()
    }
    });
    alert("New user addition success");
      
  };

  
  return (
    <>
    {OnSubmitSuccess ?(
    <div className="AddUser-btnClick" id="AddNewUserSection">
      <label for="Name">
        Name: 
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br /><br />
      <label for="Age">
        Age: 
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>{" "}
      <br /><br />
      <label for="Email">
        Email: 
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br /><br />
      <label>
        User Image: 
        <input
          type="text"
          value={userimage}
          onChange={(e) => setUserimage(e.target.value)}
        />
      </label>
      <br /><br />
       <label for="Phone number">
        Phone number: 
        <input
          type="phonenumber"
          value={pnumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </label>
       <br /><br />
       <label>
        Address: 
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
       <br /><br />

             {/* 6- after entering data submit btn clicked */}
      <button onClick={Addnewuser}>Submit</button>     
      <br />
       <button onClick={OnCancelBtnClick}>Cancel</button>
    </div>

    ):(

     <div className="Edit-btn" id="EditUserSection">
      <label for="Name">
        Name: 
        <input
          type="text"
          value={OnEditSuccess.name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br /><br />
      <label for="Age">
        Age: 
        <input
          type="number"
          value={OnEditSuccess.age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>{" "}
      <br /><br />
      <label for="Email">
        Email: 
        <input
          type="email"
          value={OnEditSuccess.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br /><br />
      <label>
        User Image: 
        <input
          type="text"
          value={OnEditSuccess.userimage}
          onChange={(e) => setUserimage(e.target.value)}
        />
      </label>
      <br /><br />
       <label for="Phone number">
        Phone number: 
        <input
          type="phonenumber"
          value={OnEditSuccess.pnumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </label>
       <br /><br />
       <label>
        Address: 
        <input
          type="text"
          value={OnEditSuccess.address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
       <br /><br />
       <button onClick={EditUser}>Update</button>
    </div>

)}
    </>
  );
};

export default User;
