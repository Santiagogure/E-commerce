import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";
import AccountHead from "../../components/Account/AccountNav/AccountHead";
import AccountNav from "../../components/Account/AccountNav/AccountNav";
import { LoadingText } from "../../components/Common/Loader";

const Account = () => {
  const [loading, setLoading] = useState(true);
  const { isLogin } = useContext(AppContext);

  setTimeout(() => {
    setLoading(false);
  }, 1200);

  const navigate = useNavigate();
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
            <div className="relative   flex-col gap-6 ">
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
            navigate("/login");
          }, 4000)}
        </>
      )}
    </>
  );
};

export default Account;
