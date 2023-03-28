import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import LogOut from "../Account/AccountNav/LogOut";
import { AppContext } from "../../context/DataProvider";

export const Search = (props) => {
  const { valueSearch, onSearchSubmit, onInputChange } = useContext(AppContext);

  useEffect(() => {
    onSearchSubmit();
  }, []);

  const [focusInput, setFocusInput] = useState(false);

  return (
    <div
      className={`${props.classes} relative h-10 rounded-lg ${
        focusInput ? "outline outline-5 outline-offset-0 outline-outline" : ""
      } `}
    >
      <form onSubmit={onSearchSubmit} className="w-full">
        <input
          name="valueSearch"
          type="text"
          value={valueSearch}
          className=" h-full w-full rounded-r-lg  px-4 text-secondary text-opacity-70 focus:outline-none"
          onFocus={() => setFocusInput(true)}
          onChange={onInputChange}
          onBlur={() => setFocusInput(false)}
        />
      </form>

      <button className="customIcon absolute right-0 flex h-full items-center justify-center rounded-r-lg bg-outline px-3  focus:outline focus:outline-5 focus:outline-offset-0 focus:outline-outline">
        <span className="w-6 translate-y-[2px]">
          <ion-icon
            name="search-outline"
            style={{ color: "#232f3e" }}
          ></ion-icon>
        </span>
      </button>
    </div>
  );
};

const HeaderTop = () => {
  const { isLogin, setIsLogin, userName, setUserName, setMenuIsVisible } =
    useContext(AppContext);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername && savedUsername !== "undefined") {
      setUserName(savedUsername);
      setIsLogin(true);
    }
  }, []);

  const usernameDisplay =
    userName.length < 14
      ? userName[0]?.toUpperCase() + userName.slice(1)
      : userName[0]?.toUpperCase() + userName.slice(1, 13) + "...";

  return (
    <div
      className="flex items-center
     justify-between gap-12  py-1 md:py-2"
    >
      <div className="customIcon flex translate-y-1  gap-3 md:gap-6  lg:hidden">
        <span
          onClick={() => setMenuIsVisible(true)}
          className="flex w-5 sm:w-6 lg:hidden"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <span className="hidden w-5 sm:w-6 lg:flex">
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <span className="hidden w-5  sm:w-6 lg:flex">
          <ion-icon name="search-outline"></ion-icon>
        </span>
      </div>
      <Link to="/" className="cursor-pointer text-white">
        <h2 className="text-[1.1rem] sm:text-xl md:text-2xl">GureShop</h2>
        <p className="text-[0.65rem] opacity-80">The best Shop</p>
      </Link>
      <Search classes="hidden grow lg:flex " classesBtn="hi" />

      <nav>
        <ul className=" flex list-none  items-center gap-3 md:gap-4 ">
          <li className="cursor-pointer text-white">
            {
              <>
                {isLogin ? (
                  <div className="flex items-center justify-center space-x-5">
                    <Link
                      to={`/users/${userName}/username`}
                      className="cursor-pointer text-white"
                    >
                      {usernameDisplay}
                    </Link>
                    <LogOut />
                  </div>
                ) : (
                  <Link to="/login">Login & Register</Link>
                )}
              </>
            }
          </li>

          <CartIcon />
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTop;
