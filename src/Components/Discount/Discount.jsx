/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import discount from "../../Images/discount.png";
function Discount() {
  return (
    <section className="discount md:py-24 p-10 ">
      <div className="container">
        <div className="dicount-card d-flex justify-content-center align-items-center max-sm:items-start max-md:flex-col max-md:justify-between max-md:gap-5 gap-5  bg-gray rounded-5 ">
          <div className="card-text px-5 max-md:pt-10 ">
            <div className="flex-col d-flex position-relative pl-8 mb-6">
              <div className="position-absolute line mt-3 w-1 bg-main "></div>
              <div className="select-none">
                <h2 className="text-6xl mb-0 fw-700">
                  Save
                  <br />
                  <span className="text-8xl lg:text-6xl md:text-4xl font-bold tracking-widest">
                    20% OFF
                  </span>
                  <br />
                  In Fashion
                </h2>
              </div>
            </div>
            <div className=" mt-3 d-flex align-items-center gap-3 w-auto max-sm:flex-col max-sm:items-start">
              <div className="fs-5 fw-bold">Use the discount code</div>
              <div className="bg-main text-white p-3 rounded-5  ">FASH2023</div>
            </div>
          </div>
          <div className="card-image w-auto select-none">
            <div className="image-wrapper w-100 md:-mt-20">
              <img src={discount} className="w-100 max-md:max-w-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
