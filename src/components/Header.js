import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-black h-7"></div>
      <div className="Header_items p-3 flex grid grid-cols-7 ">
        <img src={require("./assets/SHOP.CO.png")} alt="shop.co" />
        <p className="items">
          <select name="show" defaultValue="shop">
            <option>Cosmetics</option>
            <option>Clothes</option>
            <option>Food items</option>
          </select>
          <button>On Sale</button>
          <button>New Arrivals</button>
          <button>Brands</button>
          <input type="text" placeholder="search"></input>
          <img src={require("./assets/cart.png")} alt="shop.co" />
          <img src={require("./assets/Frame (3).png")} alt="shop.co" />
        </p>
      </div>
      <div className="main">
        <div className="shop-text"></div>
        <div className="image">
          <img src={require("./assets/Frame 128.png")} alt="shop.co" />
        </div>
      </div>
    </>
  );
};

export default Header;
