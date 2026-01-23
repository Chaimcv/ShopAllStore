import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [logg, setLog] = useState();
  const navigate = useNavigate();

  const [emailad, setEmail] = useState();
  const [passad, setpass] = useState();

  useEffect(() => {
    loginFun();
  }, []);

const Adminswitch=()=>{
  navigate("/admin");
}

  // login data===username: emilys ,password: emilyspass

  const loginFun = () => {
    console.log(emailad, "email");
    console.log(passad, "password");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: emailad, //value we type
        password: passad, //password we type
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((logg) => {
        console.log(logg, "datassssssss");

        if (logg) {
          if (logg?.accessToken) {
            localStorage.setItem("token", logg.accessToken);
            navigate("/");
          } else {
            navigate("/login");
          }

          if (logg?.firstName && logg?.image) {
            const userdata = {
              username: logg?.firstName,
              userimage: logg?.image,
            };
            localStorage.setItem("userdata", JSON.stringify(userdata));
          }
        } else {
          alert("invalid");
        }
      });
  };

  return (
    <div className="main flex grid grid-cols-2 ">
      <div className=" lg-grid">
        <img
          src={require("../components/assets/Illustration.png")}
          alt="loginpage-image"
        />
      </div>
      <div>
        <div className="p-[7%] ">
           <button className="bg-black text-white" onClick={Adminswitch}>Switch to admin Page</button><br />
          <div className=" ">
            <h1 className="font-bold mt-[15%] flex justify-start">
              Welcome to
              <br /> <br />
            </h1>
            <h1 className="text-blue-800 flex justify-start "> SHOP.CO</h1>
            <br /> <br />
            <div className="shadow-2xl w-full">
              <button>
                <img
                  src={require("../components/assets/search 1.png")}
                  alt="or-image"
                  className="w-[20%] h-[20%]"
                />
                Login with Google
              </button>
              <br /> <br />
              <button>
                <img
                  src={require("../components/assets/Vector.png")}
                  alt="or-image"
                  className="w-[2%] h-[2%]"
                />
                Login with Facebook
              </button>
              <br /> <br />
            </div>

            <img src={require("../components/assets/or.png")} alt="or-image" />
          </div> <br />
          <div>
            <input
              type="email"
              className="w-full"
              value={emailad}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            ></input>
            <br /> <br />
            <input
              type="password"
              className="w-full"
              value={passad}
              onChange={(e) => setpass(e.target.value)}
              placeholder="Password"
            ></input>
            <br /> <br />
            <button className="text-white bg-black w-full" onClick={loginFun}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
