import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TrendItem from "../Common/TrendItem";
import { getImageUrl } from "../../utilities/utilities";

const Carousel = ({ items }) => {
  const totalLength = items.length;
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemPerIndex, setItemPerIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const lastIndex = Math.ceil(totalLength / 6) - 1;
  const remainedItem = totalLength % itemPerIndex;

  let nextMoveSize =
    currentIndex === lastIndex
      ? remainedItem * itemWidth
      : containerWidth * currentIndex;

  const getBreakpoint = (size) => {
    if (size > 1023) return "lg";
    else if (size > 767) return "md";
    else if (size > 300) return "sm";
  };

  const setSizes = (bp) => {
    switch (bp) {
      case "lg":
        setItemPerIndex(6);
        break;
      case "md":
        setItemPerIndex(6);
        break;
      case "sm":
        setItemPerIndex(4);
      default:
        break;
    }
  };

  const handleResize = () => {
    const bp = getBreakpoint(window.innerWidth);
    setSizes(bp);
    setContainerWidth(carousel.current.clientWidth);
  };

  useEffect(() => {
    setContainerWidth(carousel.current.clientWidth);
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setItemWidth(containerWidth / itemPerIndex);
  }, [containerWidth, itemPerIndex]);

  return (
    <>
      <button className="absolute left-[-50px] top-[45%] hidden lg:block">
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
          {items.map((item, index) => {
            return (
              <TrendItem
                key={index}
                imageSrc={getImageUrl(
                  item?.attributes.image.data.attributes.url
                )}
                type={item?.attributes.type}
                category={item?.attributes.category}
                width={itemWidth}
              />
            );
          })}
        </div>
      </div>
      <button className="absolute right-[-50px] top-[45%] hidden lg:block">
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
      <div className="flex items-center justify-center gap-3 mt-4 lg:hidden">
        {Array.from({ length: lastIndex + 1 }, (_, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[6px] h-[6px] rounded-full border-[1px] border-black hover:bg-[#e50010] hover:border-none ${
                currentIndex === index ? "bg-[#e50010]" : ""
              }`}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
