import React from "react";
import TourGuidServices from "./TourGuidServices/TourGuidServices";
import "./Services.css";

const Services = () => {
  return (
    <div className="container">
      <h1 className="text-center">Services</h1>
      <TourGuidServices id="1"></TourGuidServices>
    </div>
  );
};

export default Services;
