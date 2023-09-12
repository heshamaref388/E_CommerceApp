import React from "react";
import { Link } from "react-router-dom";

const HomeCardPayment = () => {
  return (
    <section className="bg-hero bg-zinc-50 py-5 flex justify-center mb-10">
      <div className="container m-auto">
        <div className="flex justify-between items-center md:px-20 m-auto max-md:flex-col-reverse md:gap-20 ">
          <div className="w-full md:w-3/4 max-md:text-center">
            <h4 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase">
              SHOP best sellers
            </h4>
            <span className="font-bold block my-5 text-gray-200">
              at nova.com
            </span>
            <Link
              to="/products"
              className="p-2 md:px-10  hover:bg-indigo-600 rounded bg-main-color text-white ease-in duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCardPayment;
