import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const[logg,setLog]=useState();
const navigate=useNavigate();

const[emailad,setEmail]=useState();
const[passad,setpass]=useState();

  useEffect(()=>{
  loginFun();
  },[])
 
 // login data===username: emilys ,password: emilyspass

 const loginFun = () => {

console.log(emailad,"email");
console.log(passad,"password");
  fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: emailad,   //value we type
          password: passad,    //password we type
          expiresInMins: 30, // optional, defaults to 60
        }),
      })
        .then((res) => res.json())
        .then((logg) =>{ 
            console.log(logg,"datassssssss")

            if(logg)
      {
      
        if(logg?.accessToken)
      {
        localStorage.setItem("token",logg.accessToken);
        navigate("/");
      }
      else{
       navigate("/login");
      }
      
       if(logg?.firstName && logg?.image)
       {
        const userdata={
          "username":logg?.firstName,
          "userimage":logg?.image
        }
        localStorage.setItem("userdata",JSON.stringify(userdata));

       }
      }
      else{
        alert("invalid");
      }
      
        }
        ) 

  };
   

  return (
    <div className='main flex grid grid-cols-2'>
        <div >
             <img src={require("../components/assets/Illustration.png")} alt="loginpage-image" />
        </div>
        <div>
            <div className='login '>
                 <div>
                    <h1>Welcome to<br /> SHOP.CO</h1>
                    <button>Login with Google</button>
                  <button>Login with Facebook</button>
                  <img src={require("../components/assets/or.png")} alt="or-image" />
                 </div>
                <div>
                    <input type='email'  value={emailad}  onChange={e=> setEmail(e.target.value)} placeholder='Enter your email'></input>
                     <input type='password' value={passad} onChange={e => setpass(e.target.value)} placeholder='Password'></input>
                     <button onClick={loginFun}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login