import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/DataProvider";

import ads from "../../../assets/style.jpg";
import { FilterCategories } from "./FilterCategories";
import CardItem from "../../Common/CardProduct";
import CategoryNav from "../CategoryLeftColumn/CategoryNav";
import { useMemo } from "react";

const Categories = () => {
  const { categories } = useParams();

  const { allProducts, setMenuIsVisible } = useContext(AppContext);

  const products = useMemo(() => {
    const productList = [];
    allProducts.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        subcategory.products.forEach((product) => {
          productList.push(product);
        });
      });
    });
    return productList;
  }, [allProducts]);

  useEffect(() => {
    setMenuIsVisible(false);
  }, [categories]);

  return (
    <>
      <div className="mb-5 mr-10 flex flex-col items-center justify-center lg:mr-0">
        <div className="relative top-12 left-5 flex flex-col items-center justify-center space-y-2 text-3xl lg:hidden">
          <h1>Results for</h1>
          <h1>{categories}</h1>
        </div>
        <div className="mt-10 ml-10 flex flex-row items-start justify-between">
          <div
            className={`
            mt-[5rem]  hidden min-w-[15%] flex-col lg:flex`}
          >
            <CategoryNav category={categories} renderCategory={categories} />
            <div className="max-w-[190px]">
              <img src={ads} alt="a women" />
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-col flex-wrap items-center">
              <div className="mt-16 flex basis-full  flex-wrap items-center justify-center">
                {categories === "All collections" ? (
                  products &&
                  products.length > 0 &&
                  products.map((product, index) => (
                    <div
                      key={index}
                      className="mx-8 my-3 mt-4 flex flex-row flex-wrap"
                    >
                      <CardItem
                        key={index}
                        product={product}
                        showAction={true}
                      />
                    </div>
                  ))
                ) : categories === "Fashions" ? (
                  <FilterCategories begin={0} end={1} />
                ) : categories === "Electronics" ? (
                  <FilterCategories begin={1} end={2} />
                ) : categories === "Home and Garden" ? (
                  <FilterCategories begin={2} end={3} />
                ) : categories === "Vehicle" ? (
                  <FilterCategories begin={3} end={4} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="min-w-[2%]"></div>
        </div>
      </div>
    </>
  );
};

export default Categories;
