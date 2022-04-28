import React from "react";
import "./AboutUs.css";
import founder from "../../images/founder.png";
const AboutUs = () => {
  return (
    <div>
      <div className="about-us-img-container py-5">
        <h3 className="text-center text-white">About Us</h3>
        <h1 className="text-white text-center w-50 mx-auto">
          WE ASPIRE TO CHANGE THE CONCEPT OF TRAVELLING BY MAKING IT MORE
          AUTHENTIC, MORE LOCAL.
        </h1>
      </div>
      <div>
        <img className=" founder-img d-block mx-auto" src={founder} alt="" />
        <h4 className="brown text-center">Founder</h4>
        <h6 className="brown text-center">Shuvo Islam</h6>
      </div>
      <div className="container">
        <p>
          This is not a full website. I have created this for programming hero
          web development assignment. However I will complete this website
          later. I will use python django framework for developing this website
          backend and I will use django REST framework for making API so that my
          website can communicate with third party websites mobile apps and
          others.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
