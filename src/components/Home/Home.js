import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import HotelBookingServices from "../Services/HotelBookingServices/HotelBookingServices";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="container">
        <HotelBookingServices></HotelBookingServices>
      </div>
    </div>
  );
};

export default Home;
