import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-black h-10"></div>

      {/* large screen */}
      <div className="Header_items hidden lg:block p-3 flex grid grid-cols-2">
        <div className="shopco-icon w-[20%]">
          <img src={require("./assets/SHOP.CO.png")}  alt="shop.co" />
        </div>
        <div className="w-auto"> 
        <p className="items flex grid grid-cols-7">
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
          <img src={require("./assets/cart.png")} alt="shop.co" />
          <img src={require("./assets/Frame (3).png")} alt="shop.co" />
        </p>
        </div>
      </div>
     
      {/* small screen */}
      <div className="Header_items lg:hidden flex  grid-cols-2">
       <div className="shopco-icon w-[30%]"><img src={require("./assets/SHOP.CO.png")}  alt="shop.co" />
       </div>
       <div className="header2 flex grid-cols-3"><input type="text" placeholder="search"></input>
          <img src={require("./assets/cart.png")} alt="shop.co" />
          <img src={require("./assets/Frame (3).png")} alt="shop.co" /></div>
      </div>


    </>
  );
};

export default Header;
