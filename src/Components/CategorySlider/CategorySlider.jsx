import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function CategorySlider() {
  const [Category, setCategory] = useState(null);

  async function allCategories() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    setCategory(data.data);
  }

  useEffect(function () {
    allCategories();
  }, []);

  const settings1 = {
    // dots: true,
    // fade: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="text-category d-flex align-items-center">
        <h3 className="py-4">Shop Popular</h3>
        <h3 className="text-success px-2">Categories</h3>
      </div>
      <Slider {...settings1}>
        {Category?.map(function (category, idx) {
          return (
            <div key={idx}>
              <Link to={`/categoryproducts/${category._id}`}>
                <img
                  src={category.image}
                  className="w-100 rounded-3 px-1"
                  style={{ height: "200px" }}
                  alt={category.title}
                />
                <h2 className="h6 pt-2 text-center text-success">
                  {category.name}
                </h2>
              </Link>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
