import React, { useContext } from "react";

import Adds from "./Soon";
import {
  foodProcessor,
  tv,
  car,
  pcsoon,
  girlfashion,
  toys,
} from "../../../export/soonProducts";
import { AppContext } from "../../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";

const Deals = () => {
  const {
    dressesProducts,
    electronicsProducts,
    homeProducts,
    vehicleProducts,
  } = useContext(AppContext);
  const allProducts = [
    dressesProducts,
    electronicsProducts,
    homeProducts,
    vehicleProducts,
  ];

  const navigate = useNavigate();

  function redirect(url) {
    navigate(`/category/${url}`);
  }

  return (
    <>
      <div className="relative z-10 mt-[-15rem]">
        {allProducts.map((products, index) => (
          <div key={index}>
            <div className="mx-auto flex max-w-[88rem] items-center justify-between bg-white p-4">
              <h2 className="fontm ml-2 text-xl">
                {index === 0
                  ? "Fashions"
                  : index === 1
                  ? "Electronics"
                  : index === 2
                  ? "Home and Garden"
                  : index === 3
                  ? "Vehicle"
                  : ""}
              </h2>
              <button
                className="rounded border bg-blue-600 px-3 py-2 text-white transition-all hover:bg-white hover:text-primary"
                onClick={() =>
                  redirect(
                    index === 0
                      ? "Fashions"
                      : index === 1
                      ? "Electronics"
                      : index === 2
                      ? "Home and Garden"
                      : index === 3
                      ? "Vehicle"
                      : ""
                  )
                }
              >
                View all
              </button>
            </div>
            <Slider data={products} />
          </div>
        ))}
      </div>
      <Adds text="Soon" img1={foodProcessor} img2={tv} img3={car} />
      <Adds text="Soon" img1={girlfashion} img2={pcsoon} img3={toys} />
    </>
  );
};

export default Deals;
