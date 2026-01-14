import React from 'react'

const Login = () => {
const url = process.env.REACT_APP_API_URL;

  const credentials = { username: 'john_doe', password: 'pass123' };
  fetch(`${url}/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credentials)
})
  .then(response => response.json())
  .then(data => console.log(data));


    function loginFun(){
    }


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
                    <input type='email' placeholder='Enter your email'></input>
                     <input type='password' placeholder='Password'></input>
                     <button onClick={loginFun()}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login