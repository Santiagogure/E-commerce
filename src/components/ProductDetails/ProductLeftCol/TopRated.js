import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRated = ({ products }) => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    setTopRated(products);
  }, [products]);

  const [topRatedProductIsOpen, setTopRatedProductIsOpen] = useState(false);

  return (
    <>
      {<div className="flex items-center justify-center gap-2"></div>}
      {
        <div className="mb-8  max-h-[230px] max-w-[190px] rounded-sm bg-white p-2">
          <div
            className="relative  cursor-pointer p-2"
            onClick={() => setTopRatedProductIsOpen((prevSt) => !prevSt)}
          >
            <h2 className="text-xl font-medium text-blue-600">Top Rated</h2>
            <span className="absolute right-2 top-3">
              {topRatedProductIsOpen ? (
                <ion-icon name="chevron-up-outline"></ion-icon>
              ) : (
                <ion-icon name="chevron-down-outline"></ion-icon>
              )}
            </span>
          </div>

          <div
            className={`flex flex-col gap-4 overflow-hidden transition-all duration-300  ${
              topRatedProductIsOpen ? "h-60 py-4" : "h-0 py-0"
            } `}
          >
            {topRated &&
              topRated.length > 0 &&
              topRated.slice(0, 4).map((product, index) => (
                <Link
                  key={index}
                  to={`/${product.category}/${product.name}`}
                  className="flex cursor-pointer items-center gap-4"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <div className="lg:ml-1">
                    <div className="my-1 flex gap-2 text-xs font-medium ">
                      <h1 className="cursor-pointer text-base font-semibold text-[#0e5ec1]">
                        {product.name}
                      </h1>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      }
    </>
  );
};

export default TopRated;
