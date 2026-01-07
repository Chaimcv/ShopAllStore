import React from 'react'

const Login = () => {

    function loginFun(){
        const email


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