import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/DataProvider";
import { Form } from "./Form";
import { LoadingText } from "../Common/Loader";

export const PayProducts = () => {
  const { setDisplayHeader, setDisplayFooter } = useContext(AppContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setDisplayHeader(false);
    setDisplayFooter(false);
    setTimeout(() => {
      setShow(true);
    }, 1300);
  }, []);

  return (
    <div className={"mb-20 flex items-center justify-center"}>
      {show ? (
        <div className="flex flex-row items-start justify-evenly">
          <div className="mt-16 flex flex-col items-center">
            <div className="flex min-h-[600px] min-w-[350px] items-center justify-center rounded bg-white shadow-xl lg:min-h-[700px] lg:min-w-[700px] lg:max-w-[300px]">
              <Form />
            </div>
          </div>
          <div></div>
        </div>
      ) : (
        <LoadingText text="Going to pay..." />
      )}
    </div>
  );
};
