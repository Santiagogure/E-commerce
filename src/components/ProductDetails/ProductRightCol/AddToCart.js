import React, { useCallback, useState, useEffect, useContext } from "react";
import { AppContext } from "../../../context/DataProvider";

const AddToCart = ({ product }) => {
  const { addCart } = useContext(AppContext);

  return (
    <button
      className="flex items-center gap-2 rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white"
      onClick={() => addCart(product.id)}
    >
      <span className="block translate-y-[2px]">
        <ion-icon name="cart-outline"></ion-icon>
      </span>
      <span> Add to Cart</span>
    </button>
  );
};

export default AddToCart;
