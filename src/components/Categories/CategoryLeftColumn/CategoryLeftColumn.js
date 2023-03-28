import React from "react";
import CategoryNav from "./CategoryNav";
import TopRated from "../../ProductDetails/ProductLeftCol/TopRated";

function CategoryLeftColumn({ categories, renderCategory, products, ads }) {
  return (
    <div className={` mt-[5rem]  hidden min-w-[15%] flex-col lg:flex`}>
      <CategoryNav category={categories} renderCategory={renderCategory} />
      <TopRated products={products} />
    </div>
  );
}

export default CategoryLeftColumn;
