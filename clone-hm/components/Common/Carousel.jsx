import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ children, totalLength }) => {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = Math.ceil(totalLength / 6) - 1;
  const containerWidth = carousel.current?.clientWidth;
  const itemWidth = 164;
  const itemPerIndex = 6;
  const remainedItem = totalLength % itemPerIndex;

  let nextMoveSize =
    currentIndex === lastIndex
      ? remainedItem * itemWidth
      : containerWidth * currentIndex;

  return (
    <>
      <button className="absolute left-[-50px] top-[45%]">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={`hover:text-[#e50010] border-none transition-all ${
            currentIndex === 0 ? "opacity-0" : "opacity-1"
          }`}
          onClick={() => {
            setCurrentIndex((prev) => prev - 1);
          }}
        />
      </button>
      <div className="overflow-hidden mx-[-12px]" ref={carousel}>
        <div
          className={`transition-all ease-in-out duration-500`}
          style={{
            translate: currentIndex === 0 ? "0px" : `-${nextMoveSize}px`,
            width: `${lastIndex + 1}00%`,
          }}
        >
          {children}
        </div>
      </div>
      <button className="absolute right-[-50px] top-[45%]">
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`hover:text-[#e50010] border-none transition-all ${
            currentIndex === lastIndex ? "opacity-0" : "opacity-1"
          }`}
          onClick={() => {
            setCurrentIndex((prev) => prev + 1);
          }}
        />
      </button>
    </>
  );
};

export default Carousel;
