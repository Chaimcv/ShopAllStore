import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-[#F2F0F1]'>

      {/* large screen */}
      <div className='subscriber_portal bg-black mx-[10%] flex grid grid-cols-2 m-[5%] border rounded-2xl'>
         <div className='offer-div p-[10%]'>
          <h2 className='offer text-white '>STAY UPTO DATE ABOUT OUR LATEST OFFERS </h2>
         </div>
         <div className='subscribe-portal m-[5%]'>
         <input type='email'className='email border rounded-3xl w-[50%]' placeholder='  Enter your email address'></input> 
         <br />
         <button className='subscribe-btn bg-white text-black mt-1 border rounded-3xl w-[50%]'>Subscribe to Newsletter</button>
          </div>
      </div>
        <div className='additional_options flex grid grid-cols-2  ml-[5%]'>
          <div className='shop-co w-[40%]'>
             <img src={require("./assets/SHOP.CO.png")} alt="shop.co" /><br />
             <h5 className='quotes w-[200%] text-left'>We have clothes that suits your style and which you're proud to wear and use.From women to men.</h5><br />
             <img src={require("./assets/Social.png")} alt="social-site" />
          </div>


          {/* large screen */}
          <div className='hidden lg:grid flex grid grid-cols-4 gap-1'>
            <ul className='company text-left'>
              <li className='company font-bold'>COMPANY</li>
               <li>About</li>
                <li>Features</li>
                 <li>Works</li>
                  <li>Career</li>
            </ul>
             <ul className='help text-left'>
              <li className='help font-bold'>HELP</li>
               <li>Customer Support</li>
                <li>Delivery Details</li>
                 <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
            </ul>
             <ul className='faq text-left'>
              <li className='faq font-bold'>FAQ</li>
               <li>Accounts</li>
                <li>Manage Deliveries</li>
                 <li>ORders</li>
                  <li>Payments</li>
            </ul>
             <ul className='resources text-left'>
              <li className='resources font-bold'>RESOURCES</li>
               <li>Free eBooks</li>
                <li>Development Tutorial</li>
                 <li>How to - Blog</li>
                  <li>Youtube Playlist</li>
            </ul>
          </div>

          {/* small screen */}

           <div className='lg:hidden  flex grid grid-rows-4 gap-1'>
            <ul className='company text-left'>
              <li className='company font-bold'>COMPANY</li>
               <li>About</li>
                <li>Features</li>
                 <li>Works</li>
                  <li>Career</li>
            </ul>
             <ul className='help text-left'>
              <li className='help font-bold'>HELP</li>
               <li>Customer Support</li>
                <li>Delivery Details</li>
                 <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
            </ul>
             <ul className='faq text-left'>
              <li className='faq font-bold'>FAQ</li>
               <li>Accounts</li>
                <li>Manage Deliveries</li>
                 <li>ORders</li>
                  <li>Payments</li>
            </ul>
             <ul className='resources text-left'>
              <li className='resources font-bold'>RESOURCES</li>
               <li>Free eBooks</li>
                <li>Development Tutorial</li>
                 <li>How to - Blog</li>
                  <li>Youtube Playlist</li>
            </ul>
          </div>

          {/* final section */}

        </div><br />
        <div className='final flex grid grid-cols-2 mx-[5%] mt-2'>
           <img src={require("./assets/© 2000-2021, All rights reserved (1).png")}  className="social-media mt-5"alt="social-site" /> 
           <img src={require("./assets/Frame 133.png")} alt="payment-cards" />
        </div>
      
    </div>
  
  )
}

export default Footer