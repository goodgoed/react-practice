import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Product from "../Common/NewProduct";
import InfiniteCarousel from "../Common/InfiniteCarousel";
import Carousel from "../Common/Carousel";

//TODO: Create a infinite carousel
const New = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      name: "여성",
      type: "women",
    },
    {
      name: "남성",
      type: "men",
    },
    {
      name: "Divided",
      type: "divided",
    },
    {
      name: "아동",
      type: "children",
    },
    {
      name: "신생아/유아",
      type: "baby",
    },
    {
      name: "H&M HOME",
      type: "home",
    },
  ];

  const data = {
    women: [
      {
        photo: "/new_1.jpeg",
        name: "텍스쳐 슬링백 슈즈",
        price: "₩49,900",
      },
      {
        photo: "/new_2.jpeg",
        name: "디자인 스웨트셔츠",
        price: "₩19,900",
      },
      {
        photo: "/new_3.jpeg",
        name: "오버사이즈 프린트 티셔츠",
        price: "₩39,900",
      },
      {
        photo: "/new_4.jpeg",
        name: "슈즈",
        price: "₩49,900",
      },
      {
        photo: "/new_5.jpeg",
        name: "슬링백",
        price: "₩49,900",
      },
      {
        photo: "/new_4.jpeg",
        name: "슈즈",
        price: "₩49,900",
      },
      {
        photo: "/new_3.jpeg",
        name: "오버사이즈 프린트 티셔츠",
        price: "₩39,900",
      },
      {
        photo: "/new_2.jpeg",
        name: "디자인 스웨트셔츠",
        price: "₩19,900",
      },
      {
        photo: "/new_2.jpeg",
        name: "디자인 스웨트셔츠",
        price: "₩19,900",
      },
    ],
    men: [],
    divided: [],
    children: [],
    baby: [],
    home: [],
  };

  return (
    <div className="w-full mt-5">
      <div>
        <h3 className="text-xl">신상품</h3>
        <ul className="flex gap-3 mt-4">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={`rounded-full border-[#222] border-[1px] py-2 px-4 text-sm ${
                    activeIndex === index
                      ? "bg-red-500 border-none text-white"
                      : ""
                  }`}
                  disabled={activeIndex === index ? true : false}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <InfiniteCarousel incomingData={data["women"]} />
    </div>
  );
};

export default New;
