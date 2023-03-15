import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";
import RatingStar from "./RatingStar";

const CardItem = ({ product, showAction }) => {
  const { addCart } = useContext(AppContext);

  return (
    <div
      className={`flex max-h-[450px] ${
        showAction
          ? "min-h-[10rem] w-72 shadow-lg "
          : "w-65 min-h-[5rem] max-w-[300px] shadow-lg  "
      }  flex-col items-center justify-center overflow-hidden rounded-md bg-white text-black  ${""}`}
    >
      {showAction ? (
        <>
          <Link
            to={`/${product.category}/${product.name}`}
            className="w-full"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img
              className="h-full max-h-[350px] w-full max-w-[350px] transform object-cover transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
              src={product.image}
              alt={product.name}
            ></img>
          </Link>
          <div className="flex-col items-center justify-center py-5">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-[1.3rem] font-semibold">
                {product.name}
              </h2>
              <div className="mb-[-10px] flex flex-col items-center justify-center">
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[1.2rem] font-bold text-[#0e5ec1]">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>

            <div className=" mt-8 flex items-center justify-center space-x-10">
              <button
                onClick={() => addCart(product.id)}
                className="relative  rounded bg-secondary py-2 px-4 text-base font-semibold text-white hover:bg-primary lg:min-w-[120px] "
              >
                Add to Cart
              </button>
              <div className="relative ">
                <RatingStar rating={product.rating}></RatingStar>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link
            to={`/${product.category}/${product.name}`}
            className="w-full"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img
              className={
                "h-full max-h-[350px] w-full  max-w-[350px] transform object-cover transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
              }
              src={product.image}
              alt={product.name}
            ></img>
          </Link>
          <div className="flex-col items-center justify-center py-5">
            <div className="relative bottom-5 flex flex-col items-center justify-center">
              <h2 className="mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-[1.3rem] font-semibold">
                {product.name}
              </h2>
              <div className="mb-[-10px] flex flex-col items-center justify-center">
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[1.2rem] font-bold text-[#0e5ec1]">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardItem;
