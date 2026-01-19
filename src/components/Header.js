import React, { use } from "react";

import Cart from "../pages/Cart";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Header = ({ cartdata, loginuser }) => {
  console.log(loginuser, "loginuserdata");
  console.log(cartdata, "cartdata");

  const test = loginuser.userimage;
  console.log(test, "ttttttt");

  const number = cartdata.length; //to display the number of items in cart icon
  console.log(number, "number");

  // const navigate=useNavigate();
  // const cartbtn=()=>{
  //   navigate("/cart");
  // };

  return (
    <>
      <div className="bg-black h-10"></div>

      {/* large screen */}
      <div className="Header_items hidden lg:block p-3 flex grid grid-cols-2">
        <div className="shopco-icon w-[20%]">
          <img src={require("./assets/SHOP.CO.png")} alt="shop.co" />
        </div>
        <div className="w-auto">
          <p className="items flex grid grid-cols-8">
            <select name="show" defaultValue="shop">
              <option>Shop</option>
              <option>Ornaments</option>
              <option>Clothes</option>
              <option>Bags</option>
            </select>
            <button>On Sale</button>
            <button>New Arrivals</button>
            <button>Brands</button>
            <input type="text" placeholder="search"></input>
            <span className="w-[20%] relative">
              {/* <Link to="/cart/"> */}
              {/* <button onClick={()=>cartbtn}> */}
                <img src={require("./assets/cart.png")} alt="shop.co" />
                {/* </button> */}
              {/* </Link> */}
              <h6 className="border border-double  rounded-full w-6">
                {number}
              </h6>
            </span>
            <img src="{test}" alt="userimage" />
            {/* <img src={require("./assets/Frame (3).png")} alt="shop.co" /> */}
          </p>
        </div>
      </div>

      {/* small screen */}
      <div className="Header_items lg:hidden flex  grid-cols-2">
        <div className="shopco-icon w-[30%]">
          <img src={require("./assets/SHOP.CO.png")} alt="shop.co" />
        </div>
        <div className="header2 flex grid-cols-3">
          <input type="text" placeholder="search"></input>
          <span className="w-[20%] relative">
            <img src={require("./assets/cart.png")} alt="shop.co" />
            <h6 className="border border-double  rounded-full w-6">{number}</h6>
          </span>
          <img src="{test}" alt="userimage" />
          <img src={require("./assets/Frame (3).png")} alt="shop.co" />
        </div>
      </div>
    </>
  );
};

export default Header;
