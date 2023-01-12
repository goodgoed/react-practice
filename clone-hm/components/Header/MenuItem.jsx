import React, { useState } from "react";

const MenuItem = ({ item, isEnter, setIsEnter }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <li>
      <a
        href="/women"
        className="cursor-pointer hover:border-b-[1px] hover:border-[#222]"
        onMouseEnter={() => {
          setIsShow(true);
          setIsEnter(true);
        }}
      >
        {item}
      </a>
      <div
        className={`absolute left-0 z-[100] min-h-[25rem] w-screen pt-5 ${
          isEnter && isShow
            ? "block border-b-4 border-[#222] bg-[#faf9f8]"
            : "hidden"
        }`}
        onMouseEnter={() => setIsShow(true)}
      >
        Hello
      </div>
    </li>
  );
};

export default MenuItem;
