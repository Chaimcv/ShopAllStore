import React, { useEffect, useState } from 'react'
import axios, * as others from 'axios';

const Login = () => {
const url = process.env.REACT_APP_API_URL;
const[logg,setLog]=useState();
  const credentials = { username: 'john_doe', password: 'pass123' };

  useEffect(()=>{
  loginFun();
  },[])
 
 const loginFun = () => {
  fetch(`${url}/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credentials)
   })
  .then(response => response.json())
  .then(data =>{ console.log(data,"dddata")
   setLog(data)} );
    

 
// const credentials = { username: 'john_doe', password: 'pass123' };
// axios.post('https://fakestoreapi.com/auth/login', credentials)
//   .then(response => {console.log(response.data,"jjjjjjjjjj")
//     setLog(response.data)
//  });

  };
   
console.log(logg,"hhhhhh");

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
                    <input type='email' id='username' placeholder='Enter your email'></input>
                     <input type='password' id='password' placeholder='Password'></input>
                     <button onClick={loginFun}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login