import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const url = process.env.REACT_APP_ADMIN_URL;
  const [count, setCount] = useState(0);
  console.log(url);
  const Adduser = () => {
    navigate("/addinguser");
  };

  useEffect(() => {
    Displayusers();
  }, []);

  const Displayusers = () => {
    console.log("userpage");
    setCount(count + 1);

    axios.get(`${url}`).then((response) => {
      console.log(response.data, "displayuserss");
      setUser(response.data);
    });
  };
  console.log(user, "usersssssss");

  return ( <div className="bg-green-900 h-screen"><p className="bg-yellow-700">yyyyy</p>haiii</div>
    //   <div className="bg-red-700 h-screen w-screen">
    //     <button onClick={Adduser}>Create user</button>
    //     {user.map((useritems) => {
    //       console.log(useritems.username, "hhhk");
    //       <div className="flex bg-slate-600 h-32 w-32" key={useritems.id}>
    //         {/* <img src='src\components\assets\Frame (3).png'></img> */}
    //         <h4>username:{useritems?.username}</h4>
    //         <h4>email:{useritems?.email}</h4>
    //         <h2>hai</h2>
    //       </div>
    //     })}
    //   </div>
  );
};

export default Admin;
