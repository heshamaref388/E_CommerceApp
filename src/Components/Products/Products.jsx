import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cartContext } from "../Context/CartContext";
import $ from "jquery";

// import HelpServices from "../HelpServices/HelpServices";
import { HelmetProvider } from "react-helmet-async";

export default function Products() {
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
      {allProducts ? (
        <div className="container py-5 my-5">
          <div className="row align-items-center g-5">
            <div className="col-md-3">
              <div className="textBrands">
                <h3 className="text-success fw-bolder">Our Category</h3>
                <p className="text-muted lead">
                  You can see our products and each product includes the
                  products in it
                </p>
              </div>
            </div>
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
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
      ;
    </HelmetProvider>
  );
}
