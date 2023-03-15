import React, { useState } from "react";
import { Search } from "./HeaderTop";
import { HeaderNav } from "./Links";
import { useContext } from "react";
import { AppContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const { menuIsVisible, setMenuIsVisible } = useContext(AppContext);
  const [openContact, setOpenContact] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      {menuIsVisible ? (
        <div className="scroller transition-portal absolute top-0 z-[12] h-screen w-[60%] overflow-y-auto bg-secondary shadow-xl">
          <div className="p-2">
            <span
              className="absolute right-2 top-2 cursor-pointer text-white"
              onClick={() => {
                setMenuIsVisible(false);
              }}
            >
              <ion-icon name="close-outline" size="large"></ion-icon>
            </span>
            <Search classes="flex mt-20 border-2 " />
          </div>

          <nav>
            <ul className="flex flex-col items-center justify-between">
              {HeaderNav.map((item, index) => (
                <Link index={index} to={`/category/${item.name}`}>
                  <li
                    className="text-[1.2rem] font-bold text-white"
                    key={index}
                  >
                    <button
                      className={`py-2 px-4 font-semibold uppercase ${
                        selected === index ? "bg-white text-white" : ""
                      }`}
                      onClick={() => setOpenContact(!openContact)}
                    >
                      {item.name}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileHeader;
