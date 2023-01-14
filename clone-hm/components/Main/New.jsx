import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Product from "../Common/Product";

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
        photo: "/new_1.jpeg",
        name: "텍스쳐 슬링백 슈즈",
        price: "₩49,900",
      },
      {
        photo: "/new_1.jpeg",
        name: "텍스쳐 슬링백 슈즈",
        price: "₩49,900",
      },
      {
        photo: "/new_1.jpeg",
        name: "텍스쳐 슬링백 슈즈",
        price: "₩49,900",
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
      <ul className="relative flex mt-5 gap-8">
        {data["women"].map((item, index) => {
          return (
            <div className="w-1/4" key={index}>
              <Product
                imageSrc={item.photo}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
        <button className="absolute left-[-50px] top-[45%]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="hover:text-[#e50010] border-none"
          />
        </button>
        <button className="absolute right-[-50px] top-[45%]">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="hover:text-[#e50010] border-none"
          />
        </button>
      </ul>
      <div className="w-full flex flex-row justify-center items-center gap-3 mt-5">
        {Array.from({ length: 4 }, (_, index) => {
          return (
            <button
              key={index}
              className="w-[6px] h-[6px] rounded-full border-[1px] border-black hover:bg-[#e50010] hover:border-none"
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default New;
