import React, { useContext } from "react";
import RatingStar from "../Common/RatingStar";
import { AppContext } from "../../context/DataProvider";

const CartProductQuantity = ({ item }) => {
  const { upCartQuantity, substractCartQuantity } = useContext(AppContext);

  return (
    <div className="flex">
      <button
        className="border border-customBorder px-3"
        onClick={() => substractCartQuantity(item.id)}
      >
        -
      </button>
      <input
        className="w-12  border border-customBorder px-[0.92rem] focus:outline-none"
        type="number"
        value={item.amountCart}
      />
      <button
        className="border border-customBorder px-3"
        onClick={() => upCartQuantity(item.id)}
      >
        +
      </button>
    </div>
  );
};

const CartItem = ({ item }) => {
  const { removeCart, total } = useContext(AppContext);

  return (
    <>
      {item && (
        <>
          <div className="flex gap-4 border-b border-customBorder py-6 ">
            <div className="w-1/4 md:w-[20%] lg:w-[20%]">
              <img
                // src={item.image}
                src={item.image}
                alt={item.name}
                crossOrigin="anonymous"
                className="w-full xl:w-[80%]"
              />
            </div>
            <div className="pr-2">
              <p className="mb-2 text-sm">{item.name}</p>
              <RatingStar rating={item.rating} />

              <div className="mt-4 flex items-center sm:hidden">
                <CartProductQuantity item={item} />
              </div>
            </div>
          </div>

          <div className="hidden items-center border-b border-customBorder text-sm sm:flex lg:ml-2">
            $ {item.price}
          </div>
          <div className="hidden items-center border-b border-customBorder sm:flex">
            <CartProductQuantity item={item} />
          </div>
          <div
            className={`flex items-center border-b border-customBorder lg:ml-8`}
          >
            <span
              className="cursor-pointer"
              onClick={() => removeCart(item.id)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </div>

          <div className=" flex items-center border-b border-customBorder">
            $ {total}
          </div>
        </>
      )}
    </>
  );
};

export default CartItem;
