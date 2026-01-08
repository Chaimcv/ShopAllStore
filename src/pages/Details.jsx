import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL;

  const [detail, setDetail] = useState([]);
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

        <button className="cart-btn bg-black text-white rounded-xl w-[20%]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
