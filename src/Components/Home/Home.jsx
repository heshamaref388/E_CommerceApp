import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../MainSlider/MainSlider";
import CategorySlider from "../CategorySlider/CategorySlider";
import { cartContext } from "../Context/CartContext";
import $ from "jquery";
import vadio from "../../Images/v1.mp4";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Features from "../Features/Features";
import Discount from "../Discount/Discount";
// import HomeCardPayment from "../HomeCardPayment/HomeCardPayment";
import BrandSlider from "../BrandSlider/BrandSlider";
import HelpServices from "../HelpServices/HelpServices";

export default function Home() {
  const [allProducts, setAllProducts] = useState(null);

  const { addToWishlist, removeWishlist } = useContext(cartContext);
  async function addWishlist(id, idx) {
    await addToWishlist(id);
    $(`#addWishlist${idx}`).fadeOut(100);
    $(`#delWishlist${idx}`).fadeIn(500);
  }

  async function removeFromWishlist(id, idx) {
    await removeWishlist(id);
    $(`#delWishlist${idx}`).fadeOut(100);
    $(`#addWishlist${idx}`).fadeIn(100);
  }

  async function getAllProducts() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      setAllProducts(data.data);
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  useEffect(function () {
    getAllProducts();
  }, []);

  return (
    <HelmetProvider>
      <div className="container mt-3">
        <div className="row fl " height={220} f>
          <div className="col-md-4  col-sm-12">
            <video className="videoTag w-100 h-100 " autoPlay loop muted>
              <source className="" src={vadio} type="video/mp4" />
            </video>
          </div>
          <div className="col-md-8 col-sm-12">
            <MainSlider />
          </div>
        </div>
      </div>
      <Helmet>
        <title>Fresh Cart Store</title>
      </Helmet>
      <Features />
      {allProducts ? (
        <div className="container py-4">
          <CategorySlider />
          <Discount />
          <div className="row g-5 my-1 px-5">
            {allProducts.map(function (pro, idx) {
              return (
                <div key={idx} className="col-md-3">
                  <div className="cart-customize item text-white h-100 rounded-5 position-relative shadow">
                    <i
                      id={`addWishlist${idx}`}
                      onClick={function () {
                        addWishlist(pro.id, idx);
                      }}
                      className=" fa-regular fa-heart text-dark fs-4 position-absolute top-0 end-0 m-3"
                    ></i>
                    <i
                      id={`delWishlist${idx}`}
                      onClick={function () {
                        removeFromWishlist(pro.id, idx);
                      }}
                      style={{ display: "none" }}
                      className="fa-solid fa-heart fs-4 position-absolute top-0 end-0 m-3 text-danger"
                    ></i>
                    <img
                      src={pro.imageCover}
                      className="w-100 rounded-5"
                      alt={pro.title}
                      style={{ height: "300px" }}
                    />
                    <h6 className="px-3 text-success text-start pt-3">
                      {pro.title.slice(0, pro.title.indexOf(" ", 10))}
                    </h6>
                    <h6 className="px-3 text-black">{pro.category.name}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="px-3 text-muted py-1">
                        {pro.priceAfterDiscount ? (
                          <>
                            {" "}
                            <span className="text-decoration-line-through text-danger">
                              {pro.price}{" "}
                            </span>{" "}
                            <span className=" fw-bold ps-2 text-success">
                              {pro.priceAfterDiscount} EGP
                            </span>{" "}
                          </>
                        ) : (
                          <span>{pro.price} EGP</span>
                        )}
                      </h6>
                      <span className="d-flex px-3">
                        <i className="fas fa-star star-main  px-1 fs-5"></i>
                        <h6 className="text-muted">{pro.ratingsAverage}</h6>
                      </span>
                    </div>
                    <Link
                      className="m-auto d-flex justify-content-center"
                      to={`/prodetails/${pro.id}`}
                    >
                      <button className="btn btn-success text-white w-80  mb-2 rounded-5 fw-bolder">
                        More about Product
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
            {/* <HomeCardPayment /> */}
            <BrandSlider />
            <HelpServices />
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
      ;
    </HelmetProvider>
  );
}
