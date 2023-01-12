import React from "react";

const New = () => {
  const items = [
    {
      name: "여성",
    },
    {
      name: "남성",
    },
    {
      name: "Divided",
    },
    {
      name: "아동",
    },
    {
      name: "신생아/유아",
    },
    {
      name: "H&M HOME",
    },
  ];

  return (
    <div className="w-full mt-5">
      <h3 className="text-xl">신상품</h3>
      <ul className="flex gap-3 mt-4">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className=" rounded-full cursor-pointer border-[#222] border-[1px] py-2 px-4"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default New;
