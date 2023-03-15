import React, { useContext } from "react";
import { AppContext } from "../../../context/DataProvider";

const LogOut = () => {
  const { setIsLogin, setCart } = useContext(AppContext);

  const handleLogOut = () => {
    localStorage.clear();
    setIsLogin(false);
    setCart([]);
  };

  return (
    <>
      <button className=" rounded-md  py-2 " onClick={handleLogOut}>
        <span className="mr-2 inline-block translate-y-[4px]  text-[1.5rem]">
          <ion-icon name="log-out-outline"></ion-icon>
        </span>
      </button>
    </>
  );
};

export default LogOut;
