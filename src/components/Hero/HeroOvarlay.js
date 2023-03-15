import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { LoadingText } from "../Common/Loader";
import { AppContext } from "../../context/DataProvider";

const HeroOvarlay = () => {
  const { items } = useContext(AppContext);

  const sportsGears = items.filter((product) => product.type === "Sport Gears");
  const smartphone = items.filter((product) => product.type === "Smartphone");
  const bedRoom = items.filter((product) => product.type === "Bed Room");
  const motorbike = items.filter((product) => product.type === "Motorbike");

  const ovarlay = [
    {
      title: "Sport Gears",
      content: sportsGears,
    },
    {
      title: "Smartphone",
      content: smartphone,
    },
    {
      title: "Bed Room",
      content: bedRoom,
    },

    {
      title: "Motorbike",
      content: motorbike,
    },
  ];

  return (
    <div className="relative top-[-20rem] z-10 mx-auto flex max-w-[110rem] justify-center gap-4 px-3 sm:gap-7 sm:px-8">
      {ovarlay ? (
        ovarlay.map((el, i) => (
          <div
            key={i}
            className={`flex w-[25rem] flex-col items-start justify-between bg-white py-4 px-8 ${
              i === 3 ? "hidden xl:flex" : ""
            } ${i === 2 ? "hidden lg:flex" : ""}`}
          >
            <h3 className="my-2 text-xl  font-semibold md:my-4 lg:text-2xl">
              {el.title}
            </h3>

            <div className="my-4 grid grid-cols-2 gap-6 gap-y-8    sm:my-8">
              {el.content.slice(0, 4).map((product, i) => (
                <Link
                  to={`/${product.category}/${product.name}`}
                  className="w-full"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <div key={i}>
                    <img
                      crossOrigin="anonymous"
                      src={product.image}
                      alt={product.name}
                      className="sm:h-22 w-18 h-15  mb-2 transform  object-cover transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 sm:w-36"
                    />
                    <p className="text-center opacity-80">
                      {product.name.length >= 10
                        ? product.name.slice(0, 7) + "..."
                        : product.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              className="hover:text-[#0e5ec1]"
              to={`category/type/${el.title}`}
            >
              See more
            </Link>
          </div>
        ))
      ) : (
        <LoadingText />
      )}
    </div>
  );
};

export default HeroOvarlay;
