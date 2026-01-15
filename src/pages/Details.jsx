import React, { useEffect, useState } from "react";
import { data, Link, useNavigate, useParams } from "react-router-dom";
import axios, * as others from 'axios';


const Details = () => {
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL;
 const navigate=useNavigate();
 const[resdata,setResponse]=useState(); //for cart
 const[addbtn,setAddbtn]=useState();//on add to cart btn click -show success and redirect to test page

  const [detail, setDetail] = useState([]);//display details of selected pdt
  useEffect(() => {
    productDetails();
  }, [id]);
   
  const productDetails = () => {
    fetch(`${url}/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetail(data);
      });
  };
  // console.log(detail);
 
 useEffect(()=>{
  if(addbtn){
cartHandler();
  }
        },[addbtn]);

//   const Added = () => {
//     console.log("addedclicked");
//  alert("success");
//     navigate("/")

//   }
//  if(resdata){
//     alert("success");
//     navigate("/")
//    }

const cart = { userId: 1, products: [{ id: {id} }] };

  const cartHandler = () => {
    axios.post('https://fakestoreapi.com/carts', cart)
  .then(response =>{ console.log(response.data)
    setResponse(response.data)
  });
}


  return (
    <div className=" flex grid grid-cols-2 bg-green-900 h-screen w-screen  ">
      <div className="p-[10%]">
        <img
          className=" w-[50%] h-[50%]  bg-gray-400"
          src={detail?.image}
        ></img>
      </div>
      <div className="bg-blue-500 p-[10%]" key={detail.id}>
        <h1 className="title font-extrabold  uppercase">{detail?.title}</h1>
        <br />
        {/* <h4 className='rating'>{detail?.rating.rate}</h4> */}
        <h5 className="price">Price:₹{detail?.price}</h5>
        <br />
        <h3 className="category">Category:{detail?.category}</h3>
        <br />
        <br />
        <p className="description text-red-700 font-semibold">{detail?.description}</p>
        <br />
        <br />
        <br />

         <Link to={`/cart/${detail.id}`}><button className="cart-btn bg-black text-white rounded-xl w-[20%]">
          Add to Cart
        </button> </Link> 
      </div>
    </div>
  );
};

export default Details;
