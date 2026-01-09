import React, { useEffect, useState } from 'react'
import Details from '../pages/Details';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Test = () => {
 const url=process.env.REACT_APP_API_URL;
  console.log(url,"url");
 
  
//  const navigate=useNavigate();
//    const accessToken=false;
//   if(!accessToken){
//         navigate("/Login");
//   }

    const[data,setData]=useState([]) ;
    useEffect(()=>{
       product() 
    },[])
   const product=()=>{fetch(`${url}/products`)
            .then(res=>res.json())
              .then(prod=>{
                console.log(prod);
                setData(prod);
                
              })
            }
console.log(data,"data");
  
  return (
    <>
    {/* small screen  */}
       <div className="hero  xs:flex grid-rows-1 md:flex grid grid-cols-1 lg:hidden">
        <div className="shop-text  bg-[#F2F0F1]">
          <h1 className="text font-extrabold h-[40%] w-[80%] text-5xl mt-10 mx-auto text-left xs:text-[20px] md:text-[38px]">FIND PRODUCTS <br />THAT MATCHES <br />YOUR NEED</h1>
          <h3 className="tet text-left ml-[10%]" >Browse through our diverse range of products</h3><br />
          <button className="shop-btn bg-black text-white  h-[7%] w-[25%] border rounded-2xl flex justify-start ml-[10%] px-[5%] py-[1%]">Shop Now</button> <br />
          <div className="Ratings flex  grid-cols-3 mt-2">
             <div><h1 className="int-brands font-bold text-3xl">200+</h1><br /><h5>International Brands</h5></div>
              <div><h1 className="int-brands font-bold text-3xl">2,000+</h1><br /><h5>High Quality products</h5></div>
               <div><h1 className="int-brands font-bold text-3xl">30,000+</h1><br /><h5>Happy Customers</h5></div>
          </div>
        </div>
        <div className="image ">
          <img src={require("./assets/Frame 128.png")} alt="shop.co" />
        </div>
      </div>

      {/* large screen */}
      <div className="hidden lg:grid  grid grid-cols-2 w-full bg-green-700">
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
        <div>
          <img src={require("./assets/Frame 128.png")} alt="shop.co" />

        </div>
      </div>



      {/* display */}
      {/* large screen */}
    <div className="bg-white  hidden lg:grid flex grid grid-cols-4 mx-[3%] my-[3%]"> 
       {data?.map((items)=>(
        <div className='card w-[95%] h-[95%] mx-auto bg-[#F2F0F1] mt-[1%]' key={items.id}>
        <p className='title text-left font-semibold text-base m-[2%]'>{items?.title}</p><br/>
       <img className="image w-[60%] h-[60%] mx-auto "src={items?.image}></img>
       <p>₹{items?.price}</p>
       <Link to={`/details/${items.id}`}>View Details</Link>
         {/* <Link to="/details">View Details</Link> */}
 
        </div>
       ))}
    </div>

      {/* small screen */}
      <div className="bg-white lg:hidden flex grid grid-cols-2 mx-[3%] my-[3%]"> 
      {data?.map((items)=>(
        <div className='card w-[95%] h-[95%] mx-auto bg-[#F2F0F1] mt-[1%]' key={items.id}>
        <p className='title text-left font-semibold text-base m-[2%]'>{items?.title}</p><br/>
       <img className="image w-[60%] h-[60%] mx-auto "src={items?.image}></img>
       <p>₹{items?.price}</p>
       <Link to={`/details/${items.id}`}>View Details</Link>
         {/* <Link to="/details">View Details</Link> */}
 
        </div>
       ))}
    </div>
    </>
  )
 
}


export default Test;