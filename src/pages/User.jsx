import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  // const { id } = useParams();

  const [edits, setEdits] = useState();

  const url = process.env.REACT_APP_ADMIN_URL;
  console.log(url, "url");
  const navigate = useNavigate();

  const [datta, setResdata] = useState();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPhonenumber] = useState();

  //edit section
  // useEffect(() => {
  //   editdata();
  // }, [id]);
  // const editdata = () => {
  //   console.log("editdata page");
  //   axios.get(`${url}/:${id}`).then((response) => {
  //     console.log(response.data, "data to be edited");
  //     setEdits(response.data);
  //     console.log(edits, "edits");
  //   });

    //  email=edits.email;
    //  console.log(email,"ee");
  // };

  //add section
  const Datasadded = {
    name: { name },
    age: { age },
    email: { email },
    pHonenumber: { pnumber },
  };

  const config = {
    headers: {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    },
  };

  useEffect(() => {
    if (datta != null) {
      Addnewuser();
    }
  }, []);

  const Addnewuser = () => {
    console.log("userpage");
    axios.post(`${url}`, Datasadded, config).then((response) => {
      console.log(response.data, "addeduser");
      setResdata(response.data);
    });
    alert("New user addition success");
    navigate("/admin");
  };

  return (
    <div>
      <label for="Name">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label for="Age">
        Age
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>{" "}
      <br />
      <label for="Email">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label for="Phone number">
        Phone number
        <input
          type="phonenumber"
          value={pnumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </label>
      <br />
      <button onClick={Addnewuser}>Submit</button>
      {/* <button onClick={form(false)}>Cancel</button> */}
    </div>
  );
};

export default User;
