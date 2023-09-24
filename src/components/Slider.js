import React, {Component} from "react";
import styles from "../styles/styles";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Color } from "three";



const Sliderss = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    
    <div
      className={`${styles.section}  sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >

<div >
        
        <Slider {...settings}>
        <div className="container">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            className="bg-white"
            style={{maxWidth:"50%", objectFit:"contain"}}
          />
          </div>



          <div className="container">
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            style={{width:"50%", objectFit:"contain"}}
            alt=""
          />
          </div>

          <div className="container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png"
            style={{width:"50%", objectFit:"contain"}}
            alt=""
          />
          </div>

          <div className="container">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            style={{width:"50%", objectFit:"contain"}}
            alt=""
          />
          </div>
          <div className="container">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{width:"50%", objectFit:"contain"}}
          />
          </div>
        </Slider>


      </div>    
          </div>
         
    </>
  );
};

export default Sliderss;