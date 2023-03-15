import React from "react";
import { Oval } from "react-loader-spinner";

export const LoadingText = ({
  direction = "flex-row",
  height,
  width,
  classes,
  color,
  text = "Loading...",
}) => {
  return (
    <div
      className={`flex ${direction} h-screen items-center justify-center gap-1`}
    >
      <Loading height={height} width={width} classes={classes} color={color} />
      <div className="text-[1.2rem] text-gray-500">{text}</div>
    </div>
  );
};

const Loading = ({ height, width, classes, color }) => {
  return (
    <div className={`${classes} flex items-center justify-center`}>
      <Oval
        height={height || 40}
        width={width || 40}
        color={color || "black"}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="black"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export default Loading;
