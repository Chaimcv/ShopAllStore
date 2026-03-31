import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../App.css";
import "./Adminpage.css";
import ViewUserDetails from "./ViewUserDetails";
import AddUserForm from "../components/AddUserForm";

const Adminpage = () => {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_ADMIN_URL;

  const [users, setUsers] = useState([]); //to display users in adminpage
  
  const [formvisible, setFormvisible] = useState(false); //to set the visibility of form--numbering steps 1
  console.log(formvisible, "formvisibility false");

  const Adduser = () => {
    //3- state variable value changed to true,hence form(User) is displayed. goto userpage
    setFormvisible(true);
    console.log(formvisible, "formvisibility true");
  };

  const Deleteuser = (deleteid) => {
    console.log(deleteid, "deleteid");
    const url = `${baseUrl}/users/${deleteid}`;
    console.log(url, "delete-url");
    axios.delete(url).then((response) => {
      console.log(response, "responsecheck");
    });
    alert("Deleted");
    employee();
  };

  console.log(users, "users");

  useEffect(() => {
    employee();
  }, []);
  const employee = () => {
    console.log("userpage");
    const url = `${baseUrl}/users`;
    console.log(url, "userchecking");
    axios.get(url).then((response) => {
      console.log(response.data, "displayuserss");
      setUsers(response.data);
    });
    setFormvisible(false);
  };

  return (
    <div className="not text-black">
      {formvisible && (
        <AddUserForm
          OnSubmitSuccess={() => employee}
          OnCancelBtnClick={() => setFormvisible(false)}
        /> //4-employee function passed to Form(Userpage)
      )}

      {/* 2- on btn click */}
      <div className="Admin-heroSection flex content-around">
        <h1 className="font-extrabold ml-[10%]">ADMIN</h1>
        <button className="Add-user float-left" onClick={Adduser}>
          +
        </button>
      </div>

      {users.length > 0 ? (
        <div className="Display-usersSection grid grid-cols-4 rounded-xl">
          {users.map((items) => (
            <div className="admin-card">
              <div className="user-display" key={items?.id}>
                <div className="user-images">
                  <img
                    src={items?.userimage}
                    className="user-image"
                    alt="userimg"
                  ></img>
                </div>
                <div className="user-info">
                  <h3 className="font-semibold">NAME: {items?.name}</h3>
                  <h3 className="font-semibold">AGE: {items?.age}</h3>
                  <div className="btn-align">
                  <Link to={`/admin/view/${items.id}`}>
                    <button className="View">View</button>
                  </Link>
                  <button
                    className="Delete"
                    onClick={() => Deleteuser(items.id)}
                  >
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h2>Users not available</h2>
        </>
      )}
    </div>
  );
};

export default Adminpage;
