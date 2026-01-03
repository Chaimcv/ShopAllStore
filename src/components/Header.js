import React from 'react'


const Header = () => {
  return (
    <div className>
      <div className='bg-black h-7'></div>
      <div className='Header_items p-3 mx-2'>
        <img src={require("./assets/SHOP.CO.png")} alt="shop.co" />
         <p><select name="shop" defaultValue="shop">
          <option>Cosmetics</option>
           <option>Clothes</option>
            <option>Food items</option>
          </select>
        </p>
      </div>
    </div>
  )
}

export default Header