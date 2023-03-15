import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";

export const CartItem = () => {};

const CartIcon = () => {
  const { cart, removeItem, total, isLogin, setShowMessageError } =
    useContext(AppContext);
  const location = useLocation();

  let ovarlayCartIsShown = true;
  if (location.pathname === "/cart") ovarlayCartIsShown = false;

  return (
    <>
      {
        <li className="group">
          <div className="customI relative translate-y-2 cursor-pointer  pb-2 text-white">
            <span className="absolute -right-2 -top-2 rounded-full bg-yellow-600 px-2 py-[2px] text-xs md:-right-[10px] md:-top-[10px] md:py-[1px] md:text-sm">
              {cart.length}
            </span>
            {isLogin ? (
              <Link to="/cart" className="cartIcon inline-block w-6 md:w-7">
                <ion-icon
                  onClick={() => removeItem()}
                  name="cart-outline"
                ></ion-icon>
              </Link>
            ) : (
              <ion-icon
                onClick={() => setShowMessageError(true)}
                name="cart-outline"
              ></ion-icon>
            )}
          </div>
          {ovarlayCartIsShown && (
            <div className="absolute right-2 top-14 z-50 hidden w-96 rounded-sm bg-white px-6 py-6 text-primary shadow-md group-hover:block">
              <div className="flex flex-col   ">
                {cart.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
              <div className="flex justify-between ">
                <h2 className="mb-4 font-semibold">SUBTOTAL</h2>
                <p className="text-[#828282]">$ {total}</p>
              </div>
              <Link
                to="/cart"
                className=" float-right rounded-sm border border-customBorder bg-blue-600 px-3 py-1 text-white transition-all hover:bg-white hover:text-primary"
              >
                View cart
              </Link>
            </div>
          )}
        </li>
      }
    </>
  );
};

export default CartIcon;
