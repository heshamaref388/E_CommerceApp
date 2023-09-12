import React from "react";
import Slider from "react-slick";
import slide1 from "../../Images/slider-1.png";
import slide2 from "../../Images/slider-2.jpeg";
import slide3 from "../../Images/slider-3.jpeg";
import slide4 from "../../Images/slider-4.jpeg";
import slide5 from "../../Images/slider-5.jpeg";
import slide6 from "../../Images/cc277c74-55f2-42ac-be2c-58de81843fe8.png";

var settings = {
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  speed: 2000,
  cssEase: "linear",
};
export default function MainSlider() {
  return (
    <>
      <Slider {...settings} className="h-100 ">
        <img className=" mx-2 p-2" height={230} src={slide6} alt="" />
        <img className=" mx-2 p-2" height={230} src={slide1} alt="" />
        <img className=" mx-2 p-2" height={230} src={slide2} alt="" />
        <img className=" mx-2 p-2" height={230} src={slide3} alt="" />
        <img className=" mx-2 p-2" height={230} src={slide4} alt="" />
        <img className=" mx-2 p-2" height={230} src={slide5} alt="" />
      </Slider>
    </>
  );
}
