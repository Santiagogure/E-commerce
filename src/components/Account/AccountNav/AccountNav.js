import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogOut from "./LogOut";
import { AppContext } from "../../../context/DataProvider";

const accountNav = [
  { name: "My Account", link: "profile" },
  { name: "My Cart", link: "cart" },
];

const AccountNav = () => {
  const { userName } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-2 rounded-sm bg-white p-4 shadow-lg">
      <ul>
        {accountNav.map((link) => (
          <li key={link.link} className="mb-2 py-3  hover:text-[#37475a]">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#232f3e" : "",
                };
              }}
              to={`/users/${userName}/username/${link.link}`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li>
          <LogOut />
        </li>
      </ul>
    </div>
  );
};

export default AccountNav;
