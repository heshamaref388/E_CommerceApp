import React, { useEffect, useState } from "react";
import axios from "axios";

import Slider from "react-slick";
import brandImage from "../../Images/brand.jpg";
import { Link } from "react-router-dom";
const settings = {
  // dots: true,
  // fade: true,
  infinite: true,
  slidesToShow: 4,
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
export default function BrandSlider() {
  const [brand, setAllBrand] = useState([]);

  async function getAllbrand() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands`
    );

    setAllBrand(data.data);
    // console.log(data.data);
  }

  useEffect(() => {
    getAllbrand();
  }, []);

  return (
    <>
      {" "}
      <div className="container my-5">
        <h3 className=" mb-2">Brands</h3>
        {brand.length > 0 ? (
          <div className="row">
            <div className="col-md-4">
              <img
                className=" w-100 border "
                src={brandImage}
                height={210}
                alt=""
              />
            </div>
            <div className="col-md-8">
              <Slider {...settings}>
                {brand.map(function (brand, idx) {
                  return (
                    <div key={idx} className="col-md-3 rounded-5 my-3 ">
                      <Link to={`/brandproducts/${brand._id}`}>
                        <div className="brand-item item rounded-3 p-2 shadow">
                          <img
                            src={brand.image}
                            alt={brand.name}
                            height={150}
                            className="w-100"
                          />
                          {/* <h4 className="text-success text-center py-4">
                            {brand.name}
                          </h4> */}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        ) : (
          <div className=" w-100 text-center spinner">
            <i className="fa-solid fa-spinner  fa-spin"></i>{" "}
          </div>
        )}
      </div>
    </>
  );
}
{
  /* <div className="container py-5 my-5">
  <h3 className="text-success fw-bolder">Our Brands</h3>
  <Helmet>
    <title>Brands</title>
  </Helmet>
  <div className="row align-items-center">
    <div className="col-md-3">
      <div className="textBrands">
        <p className="text-muted lead">
          You can see our brands and each brand includes the products in it
        </p>
      </div>
    </div>
    {brand.map(function (brand, idx) {
      return (
        <div key={idx} className="col-md-3 rounded-5 my-3 ">
          <Link to={`/brandproducts/${brand._id}`}>
            <div className="brand-item item rounded-5 shadow">
              <img src={brand.image} alt={brand.name} className="w-100" />
              <h4 className="text-success text-center py-4">{brand.name}</h4>
            </div>
          </Link>
        </div>
      );
    })}
  </div>
</div>; */
}
