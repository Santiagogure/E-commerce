import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import ImgSec from "./ImgSec";
import Summary from "./Summary";
import { AppContext } from "../../../context/DataProvider";
import { BuyNow } from "./BuyNow";
import { useEffect } from "react";
const ProductInfo = () => {
  const {
    items,
    upQuantity,
    substractQuantity,
    setDisplayHeader,
    setDisplayFooter,
  } = useContext(AppContext);
  const params = useParams();

  useEffect(() => {
    setDisplayHeader(true);
    setDisplayFooter(true);
  }, []);

  const products = items
    .filter((product) => product.category === params.category)
    .filter((product) => product.name === params.productname);

  const product = products;

  return (
    <div className="flex flex-col items-center justify-center">
      <>
        <div className=" bg-white px-4 ">
          <div className="flex flex-row">
            {products && (
              <div className="flex w-full flex-row items-center justify-start">
                {product.map((product) => (
                  <div key={product.id} className="flex flex-col lg:flex-row ">
                    <ImgSec product={product} />

                    <div className="mt-3 py-2 pl-10">
                      <h2 className="text-3xl">{product.name}</h2>
                      <div className="my-2 flex items-center gap-4">
                        <span className="text-xl font-bold text-[#0e5ec1]">
                          ${product.price}
                        </span>
                      </div>
                      <div className="mb-6 flex items-center gap-4">
                        {/* <RatingStar rating={product.ratingsAverage} /> */}
                        <span className="text-textColor">No reviews yet</span>
                      </div>
                      <p className="text-sm text-textColor">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        risus taciti quisque non, ante gravida habitasse eu
                        class nascetur libero eget placerat rutrum mollis,
                        semper pretium sodales justo vel litora nec ac montes
                        dapibus.
                      </p>
                      <ul className="mt-8 flex flex-col gap-6">
                        <li className="flex items-center gap-20">
                          <div className="text-sm font-semibold">
                            Quantity :
                          </div>
                          <div className="flex w-20 items-center justify-center">
                            <button
                              className="border border-customBorder px-3"
                              onClick={() => substractQuantity(product.id)}
                            >
                              -
                            </button>
                            <input
                              className="w-10 items-center justify-center border border-customBorder px-2 focus:outline-none"
                              type="number"
                              value={product.amount}
                            />
                            <button
                              className="border border-customBorder px-3"
                              onClick={() => upQuantity(product.id)}
                            >
                              +
                            </button>
                          </div>
                        </li>
                        <li className="flex items-center gap-20">
                          <div className="text-sm font-semibold">
                            Subtotal :
                          </div>
                          <div className="text-xl font-bold text-[#0e5ec1]">
                            ${product.price * product.amount}
                          </div>
                        </li>
                        <li className="flex items-center gap-16">
                          <div className="text-sm font-semibold">
                            Availability :
                          </div>
                          <div className="text-sm text-orange-400">
                            Many In Stock
                          </div>
                        </li>
                      </ul>
                      <div className="mt-6 flex gap-4">
                        <AddToCart product={product} />
                        <BuyNow product={product} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="ml-10 max-w-[90%]">
            <Summary product={product} />
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductInfo;
