import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/DataProvider";
import CardItem from "../../Common/CardProduct";

export const FilterCategories = ({ begin, end }) => {
  const { allProducts } = useContext(AppContext);

  return (
    <>
      {allProducts.slice(begin, end).map((category) => (
        <div key={category.id}>
          {category.subcategories.map((subcategory) => (
            <div className="flex flex-wrap items-center justify-center">
              {subcategory.products.map((product) => (
                <div className="mx-8 my-3 mt-4 flex flex-row flex-wrap">
                  <CardItem product={product} showAction={true} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
