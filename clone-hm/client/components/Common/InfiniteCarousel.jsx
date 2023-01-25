import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import { getImageUrl } from "../../utilities/utilities";

const InfiniteCarousel = ({ incomingData }) => {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [transition, setTransition] = useState("");
  const [nextMoveSize, setNextMoveSize] = useState(0);

  const totalItemAmount = incomingData.length;
  const itemPerIndex = 2;
  const data = modifyData(incomingData);
  const startPosition = containerWidth;
  const itemWidth = containerWidth / itemPerIndex;
  const listWidth = itemWidth * data.length;
  const lastIndex = Math.ceil(totalItemAmount / itemPerIndex) - 1;
  const remainedItem = totalItemAmount % itemPerIndex;

  useEffect(() => {
    setContainerWidth(carousel.current.clientWidth);
    setNextMoveSize(carousel.current.clientWidth);
  }, []);

  const getIndex = (index) => {
    if (index <= lastIndex && index >= 0) return index;

    return index >= lastIndex ? 0 : lastIndex;
  };

  function modifyData(data) {
    let index = 0;
    const ret = [...data];
    while (index < itemPerIndex) {
      ret.unshift(data[data.length - 1 - index]);
      ret.push(data[index]);
      index++;
    }
    return ret;
  }

  const handleClick = (dir) => {
    let lastSlidePosition = 0;
    switch (dir) {
      case "left":
        setCurrentIndex(getIndex(currentIndex - 1));
        setNextMoveSize((prev) => {
          return currentIndex === lastIndex
            ? prev - remainedItem * itemWidth
            : prev - containerWidth;
        });

        if (currentIndex === 0) {
          lastSlidePosition =
            startPosition +
            containerWidth * (lastIndex - 1) +
            remainedItem * itemWidth;
          setTimeout(() => {
            setTransition("");
            setNextMoveSize(lastSlidePosition);
          }, 600);
        }
        break;
      case "right":
        setCurrentIndex(getIndex(currentIndex + 1));
        setNextMoveSize((prev) => {
          return currentIndex === lastIndex - 1
            ? prev + remainedItem * itemWidth
            : prev + containerWidth;
        });
        if (currentIndex === lastIndex) {
          lastSlidePosition = startPosition;
          setTimeout(() => {
            setTransition("");
            setNextMoveSize(lastSlidePosition);
          }, 600);
        }
        break;
    }
    setTransition("transition-all ease-in-out duration-500");
  };

  return (
    <>
      <div className="relative w-full mt-5 gap-8">
        <button
          className="absolute left-[-50px] top-[45%]"
          onClick={() => {
            handleClick("left");
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="hover:text-[#e50010] border-none"
          />
        </button>

        <div className="overflow-hidden mx-[-12px]" ref={carousel}>
          <div
            className={`${transition}`}
            style={{
              translate: `-${nextMoveSize}px`,
              width: listWidth || "5000px",
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
                    imageSrc={getImageUrl(
                      item?.attributes.image.data.attributes.url
                    )}
                    name={item?.attributes.name}
                    price={item?.attributes.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="absolute right-[-50px] top-[45%]"
          onClick={() => {
            handleClick("right");
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
