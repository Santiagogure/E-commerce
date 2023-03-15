import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/DataProvider";
import ads from "../../../assets/style.jpg";
import CategoryLeftColumn from "../CategoryLeftColumn/CategoryLeftColumn";
import CardItem from "../../Common/CardProduct";

const Categories = () => {
  const { categories } = useParams();
  const [products, setProducts] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const { items } = useContext(AppContext);

  const filteredItems = useMemo(() => {
    return items.filter((product) => product.type === categories);
  }, [categories, items]);

  useEffect(() => {
    setProducts(filteredItems);
    window.scrollTo(0, 0);
  }, [filteredItems]);

  const handleSelectChange = useCallback((event) => {
    const value = event.target.value;
    setSelectedOption(value);

    setProducts((prevProducts) => {
      const sortedProducts = [...prevProducts];
      if (value === "price-high") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (value === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (value === "rating-high") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
      } else if (value === "rating-low") {
        sortedProducts.sort((a, b) => a.rating - b.rating);
      }
      return sortedProducts;
    });
  }, []);

  const getRenderCategory = useMemo(() => {
    if (
      categories === "Men's" ||
      categories === "Women's" ||
      categories === "Sport Gears"
    ) {
      return "Fashions";
    } else if (
      categories === "Kitchen" ||
      categories === "Bed Room" ||
      categories === "Garden"
    ) {
      return "Home and Garden";
    } else if (
      categories === "Computer" ||
      categories === "Smartphone" ||
      categories === "Games"
    ) {
      return "Electronics";
    } else if (
      categories === "Cars" ||
      categories === "Motorbike" ||
      categories === "Bikes"
    ) {
      return "Vehicle";
    } else {
      return "";
    }
  }, [categories]);

  return (
    <div className="mb-10 flex flex-col">
      <div className="mt-10 ml-10 flex flex-row items-start justify-between">
        <CategoryLeftColumn
          categories={categories}
          renderCategory={getRenderCategory}
          products={products}
          ads={ads}
        />

        <div className="flex flex-col items-end justify-end">
          <div className="flex flex-col flex-wrap items-center">
            <div className="container relative right-[15%] flex  items-center justify-end space-x-8 lg:right-[5%]">
              <h1>Sort By</h1>
              <select
                className="rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select an option</option>
                <option value="price-high">Higher price</option>
                <option value="price-low">Lower price</option>
                <option value="rating-high">Higher rating</option>
                <option value="rating-low">Lower rating</option>
              </select>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {products &&
                products.length > 0 &&
                products.map((product, index) => (
                  <div
                    key={index}
                    className="mx-8 my-3 mt-10 flex flex-row flex-wrap"
                  >
                    <CardItem key={index} product={product} showAction={true} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="min-w-[2%]"></div>
      </div>
    </div>
  );
};

export default Categories;
