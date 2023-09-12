import React from "react";
import img1 from "../../Images/help/faq.png";
import img2 from "../../Images/help/home_delivery.png";
import img3 from "../../Images/help/online_payment.png";
const HelpServices = () => {
  const helpData = [
    {
      id: 1,
      img: img1,
      title: "Asked questions",
      desc: "Updates on safe Shopping in our Stores",
    },
    {
      id: 2,
      img: img2,
      title: "Online Payment Process",
      desc: "Updates on safe Shopping in our Stores",
    },
    {
      id: 3,
      img: img3,
      title: "Home Delivery Options",
      desc: "Updates on safe Shopping in our Stores",
    },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="fs-2 fw-border font-semibold text-neutral-900 mb-10">
          Services to help you shop
        </h3>
        <div className="d-flex   row ">
          {helpData.map((item) => {
            return (
              <div className="col-md-4 ">
                {" "}
                <div
                  className=" ps-2 bg-gray mt-3 help_item  rounded"
                  key={item.id}
                >
                  <div className="text p-3">
                    <h3 className="font-bold fs-4 mb-6 ">{item.title}</h3>
                    <p className="text-base">{item.desc}</p>
                  </div>
                  <div className="image overflow-hidden rounded-b-lg">
                    <img
                      src={item.img}
                      alt={`img-${item.id}`}
                      className="rounded-b-lg w-100 scailImage"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpServices;
