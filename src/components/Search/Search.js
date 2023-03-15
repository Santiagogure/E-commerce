import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";
import TopRated from "../ProductDetails/ProductLeftCol/TopRated";
import CategoryNav from "../Categories/CategoryLeftColumn/CategoryNav";
import CardItem from "../Common/CardProduct";
import ads from "../../assets/style.jpg";

export const Search = () => {
  const { items, setMenuIsVisible } = useContext(AppContext);
  const location = useLocation();

  const searchItems = items.filter((product) =>
    product.name.toLowerCase().includes(location.state.toLowerCase())
  );

  useEffect(() => {
    setMenuIsVisible(false);
  }, []);

  return (
    <div className="mb-10 mt-5 flex flex-col justify-center">
      {searchItems.length > 0 ? (
        <div className="mt-12 ml-10 flex flex-row items-start justify-between">
          <div className="mt-[49px] hidden min-w-[15%] flex-col lg:flex">
            {searchItems && searchItems.length > 0 && (
              <TopRated products={searchItems.slice(0, 4)} />
            )}
            <div className="max-w-[190px]">
              <img src={ads} alt="a women" />
            </div>
            <div className="max-w-[190px]"></div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-col flex-wrap items-center">
              <div className=" flex max-w-[250px] flex-col items-center justify-center space-y-2  space-x-1 text-3xl lg:max-w-full lg:flex-row  lg:space-y-0 ">
                <h1>
                  We have find{" "}
                  <span className="text-[#0e5ec1]">{searchItems.length} </span>
                </h1>
                <h1>results for your search</h1>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                {searchItems &&
                  searchItems.length > 0 &&
                  searchItems.map((product, index) => (
                    <div
                      key={index}
                      className="mx-8 my-3 mt-5 flex flex-row flex-wrap"
                    >
                      <CardItem
                        key={index}
                        product={product}
                        showAction={true}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="min-w-[2%]"></div>
        </div>
      ) : (
        <div className="flex min-h-[48rem] min-w-[15%] items-center justify-center lg:min-h-[38rem]">
          <h1 className="max-w-[300px] text-2xl lg:max-w-full">
            The product you are looking for that does not exist. Try with other
          </h1>
        </div>
      )}
      {/* */}
    </div>
  );
};
