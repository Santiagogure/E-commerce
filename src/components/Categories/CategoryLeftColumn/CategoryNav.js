import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderNav } from "../../Header/Links";

const CategoryNav = ({ category, renderCategory }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(category);
  }, [category]);

  const [topRatedProductIsOpen, setTopRatedProductIsOpen] = useState(false);

  const filteredCategories = HeaderNav.filter((nav) => {
    const sublinksWithoutCategory = nav.sublinks.filter(
      (sublink) => sublink.links !== category
    );

    return sublinksWithoutCategory.length > 0;
  });

  const linksToRender = filteredCategories.filter(
    (nav) => nav.name === renderCategory
  );

  const renderLinks = linksToRender.flatMap((nav) =>
    nav.sublinks
      .flatMap((sublink) => sublink.links)
      .filter((link) => link !== categories)
  );

  return (
    <>
      {<div className="flex items-center justify-center gap-2"></div>}
      {
        <div className="mb-8 h-auto  max-w-[190px] rounded-sm bg-white p-2">
          <div
            className="relative  cursor-pointer p-2"
            onClick={() => setTopRatedProductIsOpen((prevSt) => !prevSt)}
          >
            <h2 className="text-xl font-medium text-blue-600">Category</h2>
            <span className="absolute right-2 top-3">
              {topRatedProductIsOpen ? (
                <ion-icon name="chevron-up-outline"></ion-icon>
              ) : (
                <ion-icon name="chevron-down-outline"></ion-icon>
              )}
            </span>
          </div>

          <div
            className={`flex flex-col gap-4 overflow-hidden p-2 transition-all duration-300  ${
              topRatedProductIsOpen ? "h-60 py-4" : "h-0 py-0"
            } `}
          >
            <h1 className="cursor-pointer text-[1.2rem] font-semibold text-[#0e5ec1] ">
              {categories}
            </h1>
            {renderLinks.map((link, index) => (
              <Link key={index} to={`/category/type/${link}`}>
                <h1
                  className="cursor-pointer text-[1.2rem] text-[#37475a] "
                  key={index}
                >
                  {link}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default CategoryNav;
