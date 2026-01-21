import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./components/Test";
import  Details from "./pages/Details";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import React, { useState } from "react";
import Adminpage from "./pages/Adminpage";
import User from "./pages/User";
import  Userdetails from "./pages/Userdetails";

export const Addingtocart = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  //accessing data from test page on 'Add to cart' button click and saving it to array-cartproduct
  const Addtocart = (product) => {
    console.log(product, "iddd");
    const cartproduct = [
      {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
      },
    ];
    setCart((prevState) => [...prevState, ...cartproduct]); //appending data to cartproduct-array on each click
  };
  console.log(cart);

  //login section
  const accessToken = localStorage.getItem("token");
  var user = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="App">
       <Addingtocart.Provider value={cart}>
      <BrowserRouter>
        {accessToken && <Header cartdata={cart} loginuser={user} />}
        <Routes>
          <>
           <Route path="/admin" element={<Adminpage />} >
             <Route path="userdetails" element={<Userdetails />}></Route>
           </Route>

            <Route path="/addinguser/:id" element={<User />} />
             <Route path="/addinguser" element={<User />} />
         
            {/* sending Addtocart function to test as props */}
            <Route path="/" element={<Test Addtocart={Addtocart} />} />
            <Route path="/" element={<Test />} />
            <Route path="/details/:id" element={<Details />} />
            {/* <Route path="/cart" element={<Cart Cartdisplay={cart}/>} /> */}
           
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
           
          </>
        </Routes>

      </BrowserRouter>
      </Addingtocart.Provider>

      <Footer />
    </div>
  );
}

export default App;
