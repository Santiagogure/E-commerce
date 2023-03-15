import React, { useContext } from "react";

import { AppContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";

const CustoMessage = ({ message }) => {
  const { showMessageError, setShowMessageError } = useContext(AppContext);

  return (
    <>
      {showMessageError ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center  ">
          <div className="relative flex items-center justify-center rounded-lg bg-white p-10 shadow-2xl lg:max-w-[30%]">
            <div
              onClick={() => setShowMessageError(false)}
              className="absolute right-2 top-2 cursor-pointer text-3xl text-[#131921]"
            >
              <ion-icon name="close"></ion-icon>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <p className="text-2xl">{message}.</p>
              <p className="text-2xl">
                Click here to{" "}
                <Link to="/login" className="text-[#0e5ec1]">
                  Login/Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CustoMessage;
