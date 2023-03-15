import React, { useContext, useState } from "react";
import CategoryLeftColumn from "../Categories/CategoryLeftColumn/CategoryLeftColumn";
import ProductRightCol from "./ProductRightCol/ProductRightCol";
import { LoadingText } from "../Common/Loader";
import ads from "../../assets/style.jpg";
import { SimilarProducts } from "./ProductRightCol/SimilarProducts";
import CategoryNav from "../Categories/CategoryLeftColumn/CategoryNav";
import { AppContext } from "../../context/DataProvider";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1600);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading === false ? (
        <>
          <div className="grid grid-cols-1 lg:max-w-st lg:grid-cols-[5%_85%] lg:gap-10 lg:py-12 lg:px-8">
            <div className="hidden flex-col lg:flex"></div>
            <ProductRightCol />
          </div>
          <div className="">
            <SimilarProducts />
          </div>
        </>
      ) : (
        <LoadingText />
      )}
    </div>
  );
};

export default ProductDetail;
