import React from 'react'


const Header = () => {
  return (
    <div className>
      <div className='bg-black h-7'></div>
      <div className='Header_items p-3 mx-2 flex inline-block'>
        <img src={require("./assets/SHOP.CO.png")} alt="shop.co" />
         <p><select name="show" defaultValue='shop'>
          <option>Cosmetics</option>
           <option>Clothes</option>
            <option>Food items</option>
          </select>
          <button>On Sale</button>
          <button>New Arrivals</button>
          <button>Brands</button>
        </p>
      </div>
    </div>
  )
}

export default Header