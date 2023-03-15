import React, { useState } from "react";
import { URL } from "../../../App";

const ImgSec = ({ product }) => {
  console.log(product);

  return (
    <>
      <div className="flex gap-4 px-4">
        <img
          className="max-w-[350px]"
          src={product.image}
          alt={product.name}
        ></img>
      </div>
    </>
  );
};

export default ImgSec;
