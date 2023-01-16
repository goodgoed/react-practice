import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Product from "./NewProduct";

const InfiniteCarousel = ({ data }) => {
  const carousel = useRef(null);
  const totalLength = data.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const itemPerIndex = 4;
  const lastIndex = Math.ceil(totalLength / itemPerIndex) - 1;
  const itemWidth = containerWidth / itemPerIndex;
  const remainedItem = totalLength % itemPerIndex;

  let nextMoveSize =
    currentIndex === lastIndex
      ? remainedItem * itemWidth
      : containerWidth * currentIndex;

  useEffect(() => {
    setContainerWidth(carousel.current.clientWidth);
  }, []);

  return (
    <>
      <div className="relative w-full mt-5 gap-8">
        <button
          className="absolute left-[-50px] top-[45%]"
          onClick={() => {
            setCurrentIndex((prev) => prev - 1);
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="hover:text-[#e50010] border-none"
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
            {data.map((item, index) => {
              return (
                <div
                  className="float-left px-3"
                  key={index}
                  style={{ width: itemWidth }}
                >
                  <Product
                    imageSrc={item.photo}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="absolute right-[-50px] top-[45%]"
          onClick={() => {
            setCurrentIndex((prev) => prev + 1);
          }}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="hover:text-[#e50010] border-none"
          />
        </button>
      </div>

      <div className="w-full flex flex-row justify-center items-center gap-3 mt-5">
        {Array.from({ length: lastIndex + 1 }, (_, index) => {
          return (
            <button
              key={index}
              className={`w-[6px] h-[6px] rounded-full border-[1px] border-black hover:bg-[#e50010] hover:border-none ${
                currentIndex === index ? "bg-[#e50010]" : ""
              }`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default InfiniteCarousel;
