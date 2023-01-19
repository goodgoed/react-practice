import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const List = ({ title, children }) => {
  return (
    <ul className="text-sm flex flex-col gap-1">
      <li className="font-bold">{title}</li>
      {children}
    </ul>
  );
};

//TODO: Realign items - if the window gets larger menu bar does not stay in the middle
const Sidebar = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const menu = [
    {
      title: "여성",
      link: "/ladies",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-28 ${
            isEnter && activeIndex === 0
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <div className="flex flex-col gap-8">
            <List title={"기획 상품"}>
              <li>[최대 70% 할인]모두 보기</li>
            </List>
            <List title={"신상품"}>
              <li>모두 보기</li>
            </List>
            <List title={"현재 트렌드"}>
              <li>여성 베이직 웨어</li>
            </List>
            <List title={"Best Seller"}>
              <li>위클리 베스트 셀러</li>
            </List>
          </div>
        </div>
      ),
    },
    {
      title: "Divided",
      link: "/divided",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 1
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>Divided</li>
          </List>
        </div>
      ),
    },
    {
      title: "남성",
      link: "/men",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 2
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>Men</li>
          </List>
        </div>
      ),
    },
    {
      title: "신생아/유아",
      link: "/babies",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 3
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>Baby</li>
          </List>
        </div>
      ),
    },
    {
      title: "아동",
      link: "/children",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 4
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>Children</li>
          </List>
        </div>
      ),
    },
    {
      title: "H&M HOME",
      link: "/home",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 5
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>HOME</li>
          </List>
        </div>
      ),
    },
    {
      title: "스포츠",
      link: "/sports",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 6
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>SPORTS</li>
          </List>
        </div>
      ),
    },
    {
      title: "Sale",
      link: "/sale",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 7
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>SALE</li>
          </List>
        </div>
      ),
    },
    {
      title: "지속가능성",
      link: "/protect",
      popup: (
        <div
          className={`absolute left-0 z-[100] min-h-[25rem] w-screen py-5 px-14 ${
            isEnter && activeIndex === 8
              ? "block border-b-4 border-[#222] bg-[#faf9f8]"
              : "hidden"
          }`}
        >
          <List title={"기획 상품"}>
            <li>지속가능성</li>
          </List>
        </div>
      ),
    },
  ];

  return (
    <>
      <ul
        className="flex gap-6 text-sm justify-center items-center"
        onMouseLeave={() => setIsEnter(false)}
      >
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.link}
                className="cursor-pointer hover:border-b-[1px] hover:border-[#222]"
                onMouseEnter={() => {
                  setIsEnter(true);
                  setActiveIndex(index);
                }}
              >
                {item.title}
              </a>
              {item.popup}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
