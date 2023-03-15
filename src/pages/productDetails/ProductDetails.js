import React, { useState } from "react";
import ProductDetail from "../../components/ProductDetails/ProductDetail";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1600);

  return <ProductDetail />;
};

export default ProductDetails;
