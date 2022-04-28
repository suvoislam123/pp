import { Carousel } from "react-bootstrap";
import React from "react";
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
import style from './Banner.module.css'
const Banner = () => {
  return (
    <Carousel fade className={style.img}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Kuakata, Barisal</h1>
          <h3>Invoke your charming place to visit now</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Cox's Bazar</h1>
          <h3>The Longest Sea beach in the world</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Sajek Valle, Group Camp </h1>
          <h3>
            The only cloud kingdom of Bangladesh
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
