import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";
import CardItem from "../../Common/CardProduct";

export const SimilarProducts = () => {
  const [similarProducts, setSimilarProducts] = useState();
  const params = useParams();
  const { items } = useContext(AppContext);

  const products = items
    .filter((product) => product.category === params.category)
    .filter((product) => product.name === params.productname);

  const product = products;

  useEffect(() => {
    setSimilarProducts(items.filter((item) => item.type === product[0].type));
  }, []);

  return (
    <div className="mt-20 mb-20 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-semibold text-[#0e5ec1]">
        Similar Products:
      </h1>
      <div className="mt-10 flex flex-col flex-wrap space-y-5 lg:flex-row lg:space-y-0 lg:space-x-10">
        {similarProducts &&
          similarProducts.length > 0 &&
          similarProducts
            .slice(1, 4)
            .map((product) => <CardItem product={product} showAction={true} />)}
      </div>
    </div>
  );
};
