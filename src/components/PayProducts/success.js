import React, { useState, useEffect, useContext } from "react";
import "./success.css";
import { BsBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";
import { LoadingText } from "../Common/Loader";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const { setCart, setDisplayHeader, setDisplayFooter } =
    useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
      setCart([]);
    }, 3000);
  }, []);

  function redirect() {
    navigate("/");
  }

  function handleSubmit() {
    redirect();
    setDisplayHeader(true);
    setDisplayFooter(true);
  }

  return (
    <>
      {loading ? (
        <div className="mb-50">
          <LoadingText direction="flex-col" text="Buying the product..." />
        </div>
      ) : (
        <div className="mx-auto min-h-[450px]">
          <div className="success">
            <p className="icon">
              <BsBagCheckFill />
            </p>
            <h2 className="mt-5">Thank you for your order!</h2>
            <p className="email-msg mt-5">
              Check your email inbox for the receipt.
            </p>

            <button
              onClick={() => handleSubmit()}
              className="mt-10 min-w-[90px] rounded-md bg-secondary py-2 px-4 text-white hover:bg-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
