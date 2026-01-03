import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-black h-10"></div>
      <div className="Header_items p-3 flex grid grid-cols-2 ">
        <img src={require("./assets/SHOP.CO.png")} alt="shop.co" />
        <p className="items flex grid grid-cols-7">
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
        <div className="shop-text">
          <h1>FIND PRODUCTS THAT MATCHES YOUR NEED</h1>
          <h3>Browse through our diverse range of products</h3>
          <button className="shop-btn bg-black ">Shop</button>
          <div className="Ratings flex grid grid-cols-3">
             <div><h1>200+</h1><br /><h5>International Brands</h5></div>
              <div><h1>2,000+</h1><br /><h5>High Quality products</h5></div>
               <div><h1>30,000+</h1><br /><h5>Happy Customers</h5></div>
          </div>
        </div>
        <div className="image">
          <img src={require("./assets/Frame 128.png")} alt="shop.co" />
        </div>
      </div>
    </>
  );
};

export default Header;
