import React, { useContext } from "react";
import { AppContext } from "../../../context/DataProvider";

const AccountHead = () => {
  const { userName } = useContext(AppContext);

  return (
    <>
      <div>
        <div className="flex w-full items-center  gap-4  rounded-sm bg-white p-4 shadow-lg ">
          <div className="flex flex-col border-b-2   border-blue-900">
            <span
              className="text-sm
              "
            >
              Hello, {userName[0].toUpperCase() + userName.slice(1)}
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountHead;
