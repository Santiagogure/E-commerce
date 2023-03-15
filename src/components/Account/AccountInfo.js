import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingText } from "../Common/Loader";
import { AppContext } from "../../context/DataProvider";
import AccountHead from "./AccountNav/AccountHead";
import AccountNav from "./AccountNav/AccountNav";

export const AccountInfo = () => {
  const [loading, setLoading] = useState(true);
  const { isLogin } = useContext(AppContext);

  return (
    <>
      {loading && (
        <div className="flex h-screen items-center justify-center gap-1">
          <LoadingText text="Going to your profile" />
        </div>
      )}
      {!loading && isLogin && (
        <div className="mx-auto  max-w-[100rem]  px-4 py-12">
          <div className="mx-2 mt-8 grid grid-cols-1  justify-start gap-20 md:mx-0 md:grid-cols-[18%_70%]">
            <div className="relative  hidden flex-col gap-6 md:flex">
              <AccountHead />
              <AccountNav />
            </div>
            <Outlet />
          </div>
        </div>
      )}

      {!isLogin && (
        <>
          <div className="flex h-screen items-center justify-center text-xl">
            you are not logged in 😢. Please logged in to access this route
          </div>
          {setTimeout(() => {
            Navigate("/login");
          }, 4000)}
        </>
      )}
    </>
  );
};
