import React, { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Cart = ({ customClass }) => {
  const { cart, total, setDisplayHeader, setDisplayFooter } =
    useContext(AppContext);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/cart/buyProducts");
  };

  useEffect(() => {
    setDisplayHeader(true);
    setDisplayFooter(true);
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <div className={`mx-auto  px-4 py-12 ${customClass}`}>
          <div>
            <div className="grid grid-cols-[65%_10%_25%]  bg-white text-[#828282] sm:grid-cols-[32%_17%_17%_17%_17%]">
              {["PRODUCT", "PRICE", "QUANTITY", "REMOVE", "TOTAL"].map(
                (el, i) => (
                  <div
                    key={i}
                    className="hidden border-b border-customBorder bg-secondary py-3 pl-2 text-white sm:block"
                  >
                    <h2 className=" text-sm font-medium">{el}</h2>
                  </div>
                )
              )}
              <div className="col-span-2 bg-secondary py-2 pl-4 text-white sm:hidden">
                <h2>Product</h2>
              </div>
              <div className="bg-secondary py-2 text-white sm:hidden">
                <h2>Total</h2>
              </div>
              {cart &&
                cart.map((item, index) => <CartItem item={item} key={index} />)}
            </div>
            <div className="mt-10 flex items-center justify-start gap-2">
              <h2 className="text-lg font-semibold text-secondary">
                SUBTOTAL:
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">$ {total} USD</p>
              </div>
              <button
                onClick={() => redirect()}
                className="ml-3 rounded bg-secondary py-2 px-4 text-lg font-semibold text-white hover:bg-primary lg:min-w-[100px]"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[90vh] items-center justify-center text-xl">
          Your cart is empty.
        </div>
      )}
    </>
  );
};

export default Cart;
