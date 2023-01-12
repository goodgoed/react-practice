import { useState } from "react";
import React from "react";
import MenuItem from "./MenuItem";

//TODO: Realign items - if the window gets larger menu bar does not stay in the middle
const Sidebar = () => {
  const menu = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "스포츠",
    "Sale",
    "지속가능성",
  ];
  const [isEnter, setIsEnter] = useState(false);

  const handleEnter = (menu) => {};

  return (
    <>
      <ul
        className="flex flex-row gap-6 ml-[10rem] text-sm"
        onMouseLeave={() => setIsEnter(false)}
      >
        {menu.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
              isEnter={isEnter}
              setIsEnter={setIsEnter}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
