import { useEffect, useRef, useState } from "react";

import CardItem from "../../Common/CardProduct";

export const SingleProduct = ({
  product,
  i,
  numOfClick,
  widthparent,
  onGetOffScreenEl,
  data,
}) => {
  const [width, setWidth] = useState(0);
  const element = useRef(null);

  useEffect(() => {
    setWidth(element.current.offsetWidth + 20);
    let offScreen = data.length - Math.floor(widthparent / width);
    onGetOffScreenEl(offScreen);
  }, [width, widthparent, onGetOffScreenEl, data.length]);

  let exactWidth = width * i + width * numOfClick;

  return (
    <div
      style={{ transform: `translateX(${exactWidth}px)` }}
      className="testclass absolute top-0 left-0 h-full transition-all duration-500"
    >
      <div className="mx-3 mb-10 h-[20rem] w-full" ref={element}>
        <CardItem product={product} showAction={false}></CardItem>
      </div>
    </div>
  );
};

const Slider = ({ data }) => {
  const [numOfClick, setNumOfClick] = useState(0);
  const [widthparent, setWidthParent] = useState(0);
  const parentWidth = useRef(null);

  useEffect(() => {
    if (data) {
      setWidthParent(parentWidth.current.offsetWidth);
      window.addEventListener("resize", () => {
        setWidthParent(parentWidth.current?.offsetWidth);
      });
    }
  }, [data]);

  const maxNumOfClickHandler = (el) => {
    if (numOfClick < -el) setNumOfClick(-el);
  };
  if (numOfClick > 0) setNumOfClick(0);

  return (
    <>
      {data && (
        <div className=" mx-auto max-w-[88rem]  rounded-lg  bg-white">
          <div className="group relative w-full ">
            <div
              style={{ scrollbarWidth: "" }}
              className="sec scrollbar-hide relative  mb-10 h-[24rem] overflow-scroll scroll-smooth "
              ref={parentWidth}
            >
              {data.slice(0, 5).map((product, i) => (
                <SingleProduct
                  product={product}
                  key={i}
                  i={i}
                  numOfClick={numOfClick}
                  widthparent={widthparent}
                  onGetOffScreenEl={maxNumOfClickHandler}
                  data={data}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
