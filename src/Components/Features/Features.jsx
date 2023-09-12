import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BsCreditCard, BsGift, BsHeadset } from "react-icons/bs";
// import { TbDiscount2 } from "react-icons/tb"

function Features() {
  const items = [
    {
      id: 1,
      iconName: FaShippingFast,
      title: "Free shipping",
      desc: "from all order over 100 EGP",
    },
    {
      id: 2,
      iconName: BsGift,
      title: "Daily suprise offers",
      desc: "save up 25% off",
    },
    {
      id: 3,
      iconName: BsHeadset,
      title: "Support 24/7",
      desc: "shop with an expert",
    },
    {
      id: 4,
      iconName: BsCreditCard,
      title: "Secure payments",
      desc: "100% Protected Payments",
    },
  ];

  return (
    <div className="features mt-5">
      <div className="container">
        <div className="features_items">
          <div className="row">
            {" "}
            {items.map((item) => {
              return (
                <div className="col-sm-3 col-6 p-3">
                  <div
                    className="features-item d-flex align-items-center border border-gray-200 rounded"
                    key={item.id}
                  >
                    <item.iconName className=" fs-2" />
                    <div className="ps-4">
                      <h6 className="  max-md:text-sm text-base font-semibold capitalize text-main fs-bolder">
                        {item.title}
                      </h6>
                      <p className="max-md:text-xs text-sm text-neutral-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
