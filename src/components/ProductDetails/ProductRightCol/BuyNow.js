import React, { useContext } from "react";
import { AppContext } from "../../../context/DataProvider";
import { useNavigate } from "react-router-dom";

export const BuyNow = ({ product }) => {
  const { addCart, isLogin, showMessageError, setShowMessageError } =
    useContext(AppContext);

  const navigate = useNavigate();

  function buyNow() {
    if (isLogin) {
      addCart(product.id);
      navigate("/cart/buyProducts");
    }
  }

  return (
    <>
      {isLogin ? (
        <button
          onClick={() => buyNow()}
          className="rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white"
        >
          Buy it now
        </button>
      ) : (
        <button
          onClick={() => setShowMessageError(true)}
          className="rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white"
        >
          Buy it now
        </button>
      )}
    </>
  );
};
