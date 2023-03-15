import React from "react";
import Cart from "../../Cart/Cart";

const MyCart = () => {
  return (
    <div className="rounded-sm border-t-2 border-[#37475a] bg-white shadow-md">
      <Cart customClass="min-h-[30rem] py-20" />
    </div>
  );
};

export default MyCart;
