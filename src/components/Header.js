import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-black h-10"></div>

      {/* large screen */}
      <div className="Header_items hidden lg:block p-3 flex grid grid-cols-2">
        <div className="shopco-icon w-[30%]">
          <img src={require("./assets/SHOP.CO.png")}  alt="shop.co" /></div>
       <div> 
        <p className="items flex grid grid-cols-7">
          <select name="show" defaultValue="shop">
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
      <div className="Header_items lg:hidden">
       <div className="shopco-icon w-[30%]"><img src={require("./assets/SHOP.CO.png")}  alt="shop.co" />
       </div>
       <div><input type="text" placeholder="search"></input>
          <img src={require("./assets/cart.png")} alt="shop.co" />
          <img src={require("./assets/Frame (3).png")} alt="shop.co" /></div>
      </div>


      <div className="hero bg-#F2F0F1 flex grid grid-cols-2">
        <div className="shop-text  bg-[#F2F0F1]">
          <h1 className="text font-extrabold h-[40%] w-[80%] text-5xl mt-10 mx-auto text-left">FIND PRODUCTS <br />THAT MATCHES <br />YOUR NEED</h1>
          <h3 className="tet text-left ml-[10%]" >Browse through our diverse range of products</h3><br />
          <button className="shop-btn bg-black text-white  h-[7%] w-[25%] border rounded-2xl flex justify-start ml-[10%] px-[5%] py-[1%]">Shop Now</button> <br />
          <div className="Ratings flex grid grid-cols-3 mt-2">
             <div><h1 className="int-brands font-bold text-3xl">200+</h1><br /><h5>International Brands</h5></div>
              <div><h1 className="int-brands font-bold text-3xl">2,000+</h1><br /><h5>High Quality products</h5></div>
               <div><h1 className="int-brands font-bold text-3xl">30,000+</h1><br /><h5>Happy Customers</h5></div>
          </div>
        </div>
        <div className="image ">
          <img src={require("./assets/Frame 128.png")} alt="shop.co" />
        </div>
      </div>
    </>
  );
};

export default Header;
