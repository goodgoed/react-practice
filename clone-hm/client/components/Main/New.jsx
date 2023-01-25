import React, { useEffect, useState } from "react";
import InfiniteCarousel from "../Common/InfiniteCarousel";
import useFetch from "../../hooks/useFetch";
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

  // const data = {
  //   women: [
  //     {
  //       photo: "/new_1.jpeg",
  //       name: "텍스쳐 슬링백 슈즈",
  //       price: "₩49,900",
  //     },
  //     {
  //       photo: "/new_2.jpeg",
  //       name: "디자인 스웨트셔츠",
  //       price: "₩19,900",
  //     },
  //     {
  //       photo: "/new_3.jpeg",
  //       name: "오버사이즈 프린트 티셔츠",
  //       price: "₩39,900",
  //     },
  //     {
  //       photo: "/new_4.jpeg",
  //       name: "슈즈",
  //       price: "₩49,900",
  //     },
  //     {
  //       photo: "/new_5.jpeg",
  //       name: "슬링백",
  //       price: "₩49,900",
  //     },
  //     {
  //       photo: "/new_4.jpeg",
  //       name: "슈즈",
  //       price: "₩49,900",
  //     },
  //     {
  //       photo: "/new_3.jpeg",
  //       name: "오버사이즈 프린트 티셔츠",
  //       price: "₩39,900",
  //     },
  //     {
  //       photo: "/new_2.jpeg",
  //       name: "디자인 스웨트셔츠",
  //       price: "₩19,900",
  //     },
  //     {
  //       photo: "/new_2.jpeg",
  //       name: "디자인 스웨트셔츠",
  //       price: "₩19,900",
  //     },
  //   ],
  //   men: [],
  //   divided: [],
  //   children: [],
  //   baby: [],
  //   home: [],
  // };

  const getTag = (index) => {
    switch (index) {
      case 0:
        return "여성";
      case 1:
        return "남성";
      case 2:
        return "Divided";
      case 3:
        return "아동";
      case 4:
        return "신생아/유아";
      case 5:
        return "H&M HOME";
    }
  };

  const tag = getTag(activeIndex);
  const endpoint = `/products?filters[new][$eq]=TRUE&filters[category][$eq]=${tag}&populate=*`;
  const { data, loading } = useFetch(endpoint);

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
      {loading ? "loading" : <InfiniteCarousel incomingData={data} />}
    </div>
  );
};

export default New;
