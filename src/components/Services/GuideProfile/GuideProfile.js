import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GuidsContext } from "../../../App";
import "./GuideProfile.css";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import guids from '../../../guids.json'
const GuideProfile = () => {
  const params = useParams();
//   const { guids } = useContext(GuidsContext);
  console.log(params.guideId);
  let data = guids.find((data) => data?.id == params?.guideId);
  console.log(data);
  console.log(guids);
  const { id, name, img, rating, rate, intro, spot, review,article } = data;
  return (
    <div className="">
      <div className="guid-profile-header guid-cart-container w-100 d-flex guid-profile-text">
        <div>
          <img className="h-100 p-3" src={img} alt="" />
        </div>
        <div className="px-3">
          <div className="d-flex justify-content-between w-100 ">
            <div className="name">
              <p className="brown">{name}</p>
              <p>
                <small>{spot}</small>
              </p>
            </div>
            <div className="rate">
              <h1 className="brown">${rate}</h1>
            </div>
          </div>
          <div className="intro w-100">
            <p>{intro}</p>
          </div>
          <div className="d-flex justify-content-between w-100">
            <div className="reviews">
              <p>Reviews</p>
              <p className="orange">{review}</p>
            </div>
            <div className="ratings">
              <p>Ratings</p>
              <div>
              <Rating name="read-only" value={rating} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center">Our Guid Says</h1>
      <div className="container">
          <p>
          {article}
          </p>
      </div>
      <button className=" btn btn-primary w-50 d-block mx-auto mt-5" >Create a Trip </button>
    </div>
  );
};

export default GuideProfile;
