import React from "react";
import { useContext } from "react";
import { GuidsContext } from "../../../../App";
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const GuidCart = ({ guid }) => {
  const { id, name, img, rating, rate, intro, spot, review } = guid;
  const navigate = useNavigate();
  return (
    <div className="guid-cart-container">
      <img src={img} alt="" />
      <div className="px-3">
        <div className="d-flex justify-content-between w-100 ">
          <div className="name">
            <p>{name}</p>
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
            <div><Rating name="read-only" value={rating} readOnly /></div>
          </div>
        </div>
        <div className="checkout">
          <button onClick={()=>navigate(`/services/guide/${id}`)} className="btn btn-secondary w-75 d-block mx-auto">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidCart;
